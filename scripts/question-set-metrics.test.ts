import { expect, it } from "vitest";
import { minimumQuestionWords, type ChoiceId, type SingleChoiceQuestion } from "../src/domain/questions";
import { multipleQuestion } from "../src/test/fixtures";
import { buildValidQuestionSet, words } from "../src/test/questionSetFactory";
import { measureQuestions } from "./question-set-metrics";

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
  const mapped = { ...baseQuestion, objective: "3.2 Training models: 3.2.e hyperparameter tuning" };
  const metrics = measureQuestions([mapped, baseQuestion]);
  expect({ objectives: metrics.objectiveCounts, considerations: metrics.considerationCounts }).toEqual({
    objectives: { "3.2": 1, none: 1 },
    considerations: { "3.2.e": 1, none: 1 },
  });
});
