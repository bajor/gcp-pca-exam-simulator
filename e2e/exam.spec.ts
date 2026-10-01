import { expect, test } from "@playwright/test";
import { attemptStorageKey } from "../src/domain/attempt";
import { fixtureQuestionSet } from "../src/test/fixtures";

const harnessUrl = "http://127.0.0.1:4174/gcp-pca-exam-simulator/e2e/harness.html";
const fixtureAttemptKey = attemptStorageKey(fixtureQuestionSet);
const minimalPdf = "%PDF-1.4\n1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] >> endobj\ntrailer << /Root 1 0 R >>\n%%EOF\n";

test.beforeEach(async ({ page }) => {
  // The fixture case study points at Google's document; a stub keeps the tests independent of the network.
  await page.route("https://services.google.com/**", (route) => route.fulfill({ contentType: "application/pdf", body: minimalPdf }));
});

test("renders the production catalog at the project path", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Choose your practice exam." })).toBeVisible();
});

test("does not overflow the configured viewport", async ({ page }) => {
  await page.goto("./");
  expect(await fitsViewport(page)).toBe(true);
});

test("completes and reviews a marked practice attempt", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("radio", { name: /Correct$/ }).check();
  await page.getByRole("button", { name: "Mark for review" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("checkbox", { name: /Correct A/ }).check();
  await page.getByRole("checkbox", { name: /Correct C/ }).check();
  await page.getByRole("button", { name: "Finish exam" }).click();
  await expect(page.getByText("0 unanswered and 1 marked for review.")).toBeVisible();
  await page.getByRole("button", { name: "Submit answers" }).click();
  await expect(page.getByRole("heading", { name: "100.0%" })).toBeVisible();
  await expect(page.getByText("Your answer / Correct answer").first()).toBeVisible();
  await page.getByText(/Google Cloud sources, verified/).first().click();
  await expect(page.getByRole("link", { name: "Google Cloud documentation" }).first()).toBeVisible();
});

test("restores the current question after reload", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("radio", { name: /Correct$/ }).check();
  await page.getByRole("button", { name: "Next" }).click();
  const originalDeadline = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).deadline, fixtureAttemptKey);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Which two fixture answers are correct?" })).toBeVisible();
  const restoredDeadline = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).deadline, fixtureAttemptKey);
  expect(restoredDeadline).toBe(originalDeadline);
  await page.getByRole("button", { name: "Question 1, answered" }).click();
  await expect(page.getByRole("radio", { name: /Correct$/ })).toBeChecked();
});

test("places current-question controls before the question navigator in keyboard order", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Mark for review" })).toBeFocused();
});

test("keeps attempt controls within the configured viewport", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  expect(await fitsViewport(page)).toBe(true);
});

test("renders question and answer text at the same font size", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  const question = page.getByRole("heading", { name: "Which fixture answer is correct?" });
  const answer = page.getByText("Wrong B", { exact: true });
  const [questionSize, answerSize] = await Promise.all(
    [question, answer].map((text) => text.evaluate((element) => getComputedStyle(element).fontSize)),
  );
  expect(answerSize).toBe(questionSize);
});

test("renders reviewed question and answer text at the same font size", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("button", { name: "Finish exam" }).click();
  await page.getByRole("button", { name: "Submit answers" }).click();
  const question = page.getByRole("heading", { level: 3, name: "Which fixture answer is correct?" });
  const answer = page.getByRole("article").filter({ has: question }).getByText("B. Wrong B", { exact: true });
  const [questionSize, answerSize] = await Promise.all(
    [question, answer].map((text) => text.evaluate((element) => getComputedStyle(element).fontSize)),
  );
  expect(answerSize).toBe(questionSize);
});

test("supports keyboard cancellation of submission", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("button", { name: "Finish exam" }).click();
  await expect(page.getByRole("button", { name: "Keep working" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page.getByRole("button", { name: "Finish exam" })).toBeFocused();
});

test("embeds the case study beside its question on a wide screen", async ({ page, isMobile }) => {
  test.skip(isMobile, "Phones get the link instead of the embedded document.");
  const downloads = countDownloads(page);
  await openCaseStudyQuestion(page);
  await expect(page.getByTitle("EHR Healthcare case study document")).toBeVisible();
  const link = (await page.getByRole("link", { name: "Open the EHR Healthcare case study in a new tab" }).boundingBox())!;
  const next = (await page.getByRole("button", { name: "Next" }).boundingBox())!;
  expect(link.x).toBeGreaterThan(next.x + next.width);
  expect(await fitsViewport(page)).toBe(true);
  expect(downloads()).toBe(0);
});

test("links the case study below its question on a medium-width screen", async ({ page, isMobile }) => {
  test.skip(isMobile, "This checks the layout between the phone and split-screen widths.");
  await page.setViewportSize({ width: 1024, height: 768 });
  const downloads = countDownloads(page);
  await openCaseStudyQuestion(page);
  await expect(page.getByTitle("EHR Healthcare case study document")).toHaveCount(0);
  const link = (await page.getByRole("link", { name: "Open the EHR Healthcare case study in a new tab" }).boundingBox())!;
  const next = (await page.getByRole("button", { name: "Next" }).boundingBox())!;
  const questionNavigator = (await page.getByRole("complementary", { name: "Question navigator" }).boundingBox())!;
  expect(link.y).toBeGreaterThan(next.y + next.height);
  expect(link.x + link.width).toBeLessThanOrEqual(questionNavigator.x);
  expect(await fitsViewport(page)).toBe(true);
  expect(downloads()).toBe(0);
});

test("links the case study below its question on a wide screen without a PDF viewer", async ({ page, isMobile }) => {
  test.skip(isMobile, "This checks a wide screen.");
  await page.addInitScript(() => Object.defineProperty(Navigator.prototype, "pdfViewerEnabled", { get: () => false }));
  const downloads = countDownloads(page);
  await openCaseStudyQuestion(page);
  await expect(page.getByTitle("EHR Healthcare case study document")).toHaveCount(0);
  const link = (await page.getByRole("link", { name: "Open the EHR Healthcare case study in a new tab" }).boundingBox())!;
  const next = (await page.getByRole("button", { name: "Next" }).boundingBox())!;
  const questionNavigator = (await page.getByRole("complementary", { name: "Question navigator" }).boundingBox())!;
  expect(link.y).toBeGreaterThan(next.y + next.height);
  expect(link.x + link.width).toBeLessThanOrEqual(questionNavigator.x);
  expect(await fitsViewport(page)).toBe(true);
  expect(downloads()).toBe(0);
});

test("links the case study below its question on a phone", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Wide screens embed the document.");
  const downloads = countDownloads(page);
  await openCaseStudyQuestion(page);
  await expect(page.getByTitle("EHR Healthcare case study document")).toHaveCount(0);
  const link = (await page.getByRole("link", { name: "Open the EHR Healthcare case study in a new tab" }).boundingBox())!;
  const next = (await page.getByRole("button", { name: "Next" }).boundingBox())!;
  expect(link.y).toBeGreaterThan(next.y + next.height);
  expect(await fitsViewport(page)).toBe(true);
  expect(downloads()).toBe(0);
});

async function openCaseStudyQuestion(page: import("@playwright/test").Page) {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await expect(page.getByText("For this question, refer to the EHR Healthcare case study.")).toBeVisible();
}

// A browser that cannot display an embedded PDF downloads it instead.
function countDownloads(page: import("@playwright/test").Page): () => number {
  let downloads = 0;
  page.on("download", () => { downloads += 1; });
  return () => downloads;
}

async function fitsViewport(page: import("@playwright/test").Page): Promise<boolean> {
  return page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
}

async function openFixtureExam(page: import("@playwright/test").Page) {
  await page.getByRole("button", { name: "Open Practice Exam 1" }).click();
}
