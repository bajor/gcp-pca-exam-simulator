import { expect, test } from "@playwright/test";
import { attemptStorageKey } from "../src/domain/attempt";
import { fixtureQuestionSet } from "../src/test/fixtures";

const harnessUrl = "http://127.0.0.1:4174/gcp-pca-exam-simulator/e2e/harness.html";
const fixtureAttemptKey = attemptStorageKey(fixtureQuestionSet);
// The narrow layout in src/styles.css starts at this width.
const narrowLayoutMaxWidth = 800;

test.beforeEach(async ({ page }) => {
  // The fixture case study points at Google's document; a stub keeps the tests independent of the network.
  await page.route("https://services.google.com/**", (route) => route.fulfill({ contentType: "text/plain", body: "Case study" }));
});

test("renders the production catalog at the project path", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Choose your practice exam." })).toBeVisible();
});

test("does not overflow the configured viewport", async ({ page }) => {
  await page.goto("./");
  const fitsViewport = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(fitsViewport).toBe(true);
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
  const fitsViewport = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(fitsViewport).toBe(true);
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

test("shows a case study within the configured viewport", async ({ page }) => {
  await page.goto(harnessUrl);
  await openFixtureExam(page);
  await page.getByRole("button", { name: "Start practice exam" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await expect(page.getByRole("link", { name: "Open the EHR Healthcare case study in a new tab" })).toBeVisible();
  const caseStudyDocument = page.getByTitle("EHR Healthcare case study document");
  if (page.viewportSize()!.width > narrowLayoutMaxWidth) await expect(caseStudyDocument).toBeVisible();
  else await expect(caseStudyDocument).toBeHidden();
  const fitsViewport = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(fitsViewport).toBe(true);
});

async function openFixtureExam(page: import("@playwright/test").Page) {
  await page.getByRole("button", { name: "Open Practice Exam 1" }).click();
}
