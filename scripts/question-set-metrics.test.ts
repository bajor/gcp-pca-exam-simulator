import { expect, it } from "vitest";
import type { CaseStudyId } from "../src/domain/caseStudies";
import { minimumQuestionWords, type ChoiceId, type ExamSection, type SingleChoiceQuestion } from "../src/domain/questions";
import { multipleQuestion } from "../src/test/fixtures";
import { buildValidQuestionSet, words } from "../src/test/questionSetFactory";
import { measureQuestions, nearMissRunWords } from "./question-set-metrics";

const baseQuestion = buildValidQuestionSet().questions[0] as SingleChoiceQuestion;
const baseChoiceWords = 4 * 12;

function question(
  correctChoiceId: ChoiceId,
  choiceWords: readonly [number, number, number, number],
  promptWords = minimumQuestionWords,
): SingleChoiceQuestion {
  const choices = baseQuestion.choices.map((choice, index) => ({ ...choice, text: words(choice.id, choiceWords[index]) }));
  return { ...baseQuestion, prompt: words("prompt", promptWords), choices, correctChoiceId } as unknown as SingleChoiceQuestion;
}

it("counts correct letters among single-choice questions only", () => {
  const metrics = measureQuestions([question("c", [12, 12, 12, 12]), question("a", [12, 12, 12, 12]), multipleQuestion]);
  expect(metrics.correctLetterCounts).toEqual({ a: 1, b: 0, c: 1, d: 0 });
});

it("flags the correct option only when it is strictly longer than every other option", () => {
  const metrics = measureQuestions([
    question("c", [12, 12, 20, 12]),
    question("c", [20, 12, 12, 12]),
    question("c", [12, 12, 20, 20]),
  ]);
  expect(metrics.questions.map((item) => item.correctIsLongest)).toEqual([true, false, false]);
});

it("measures reading load as the prompt plus every choice", () => {
  expect(measureQuestions([question("a", [12, 12, 12, 12])]).questions[0].readingLoad).toBe(
    minimumQuestionWords + baseChoiceWords,
  );
});

it("sorts reading loads numerically for the spread of an odd-sized set", () => {
  const base = minimumQuestionWords + baseChoiceWords;
  const metrics = measureQuestions([
    question("a", [22, 12, 12, 12]),
    question("a", [12, 12, 12, 12], 1_000),
    question("a", [12, 12, 12, 12]),
  ]);
  expect(metrics.readingLoad).toEqual({ min: base, median: base + 10, max: 1_000 + baseChoiceWords });
});

it("averages the two middle reading loads of an even-sized set", () => {
  const metrics = measureQuestions([question("a", [22, 12, 12, 12]), question("a", [12, 12, 12, 12])]);
  expect(metrics.readingLoad.median).toBe(minimumQuestionWords + baseChoiceWords + 5);
});

it("reports zero spreads for an empty set", () => {
  expect(measureQuestions([]).readingLoad).toEqual({ min: 0, median: 0, max: 0 });
});

it("counts objectives and considerations from the objective field", () => {
  const mapped = { ...baseQuestion, objective: "2.3 Configuring compute systems: 2.3.b compute volatility configuration" };
  const metrics = measureQuestions([mapped, baseQuestion]);
  expect({ objectives: metrics.objectiveCounts, considerations: metrics.considerationCounts }).toEqual({
    objectives: { "2.3": 1, none: 1 },
    considerations: { "2.3.b": 1, none: 1 },
  });
});

it("counts the questions of each case study and the sections they span", () => {
  const caseStudyQuestion = (caseStudyId: CaseStudyId | undefined, section: ExamSection) => ({ ...baseQuestion, caseStudyId, section });
  const metrics = measureQuestions([
    caseStudyQuestion("ehr-healthcare", "design"),
    caseStudyQuestion("ehr-healthcare", "secure"),
    caseStudyQuestion("ehr-healthcare", "analyze"),
    caseStudyQuestion("ehr-healthcare", "operate"),
    caseStudyQuestion("cymbal-retail", "design"),
    caseStudyQuestion("cymbal-retail", "design"),
    caseStudyQuestion(undefined, "provision"),
  ]);
  expect({ questions: metrics.caseStudyQuestionCounts, sections: metrics.caseStudySectionCounts }).toEqual({
    questions: { "cymbal-retail": 2, "ehr-healthcare": 4 },
    sections: { "cymbal-retail": 1, "ehr-healthcare": 4 },
  });
});

it("counts a near-miss pair when any two options share a run of at least seven words", () => {
  const shared = words("s", nearMissRunWords);
  const shorter = words("s", nearMissRunWords - 1);
  const withChoices = (texts: readonly [string, string, string, string]) =>
    ({ ...baseQuestion, choices: baseQuestion.choices.map((choice, index) => ({ ...choice, text: texts[index] })) }) as unknown as SingleChoiceQuestion;
  const metrics = measureQuestions([
    withChoices([`grant ${shared} now`, words("b", 12), `revoke ${shared} later`, words("d", 12)]),
    withChoices([`grant ${shorter} now`, `revoke ${shorter} later`, words("c", 12), words("d", 12)]),
    withChoices([words("a", 12), `Grant ${shared.toUpperCase()}.`, words("c", 12), `grant ${shared},`]),
  ]);
  expect({ runs: metrics.questions.map((item) => item.sharedOptionRun), nearMiss: metrics.nearMissCount }).toEqual({
    runs: [nearMissRunWords, nearMissRunWords - 1, nearMissRunWords + 1],
    nearMiss: 2,
  });
});
