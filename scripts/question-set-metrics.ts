import { referencedCaseStudyIds, type CaseStudyId } from "../src/domain/caseStudies";
import { countWords, type ChoiceId, type Question } from "../src/domain/questions";

const singleChoiceIds: readonly ChoiceId[] = ["a", "b", "c", "d"];
// Label for a question whose objective lacks an objective or consideration identifier.
export const unmappedLabel = "none";
// Style guide option rule 4: two options that share a run of this many words form a near-miss pair.
export const nearMissRunWords = 7;

export interface Spread {
  readonly min: number;
  readonly median: number;
  readonly max: number;
}

export interface QuestionMetrics {
  readonly id: string;
  readonly consideration: string;
  readonly kind: Question["kind"];
  readonly caseStudyId: CaseStudyId | undefined;
  readonly stemWords: number;
  readonly shortestChoiceWords: number;
  readonly longestChoiceWords: number;
  readonly readingLoad: number;
  readonly sharedOptionRun: number;
  readonly correctChoiceIds: readonly ChoiceId[];
  readonly correctIsLongest: boolean;
}

export interface QuestionSetMetrics {
  readonly questions: readonly QuestionMetrics[];
  readonly multipleSelectCount: number;
  readonly stemWords: Spread;
  readonly choiceWords: Spread;
  readonly readingLoad: Spread;
  readonly correctIsLongestCount: number;
  readonly nearMissCount: number;
  readonly correctLetterCounts: Readonly<Record<string, number>>;
  readonly objectiveCounts: Readonly<Record<string, number>>;
  readonly considerationCounts: Readonly<Record<string, number>>;
  readonly caseStudyQuestionCounts: Readonly<Record<string, number>>;
  readonly caseStudySectionCounts: Readonly<Record<string, number>>;
}

// Measures the style-guide quantities of a set; targets stay in docs/authoring/question-style-guide.md.
export function measureQuestions(questions: readonly Question[]): QuestionSetMetrics {
  const measured = questions.map(measureQuestion);
  const singles = measured.filter((question) => question.kind === "single");
  return {
    questions: measured,
    multipleSelectCount: measured.length - singles.length,
    stemWords: spread(measured.map((question) => question.stemWords)),
    choiceWords: spread(questions.flatMap((question) => question.choices.map((choice) => countWords(choice.text)))),
    readingLoad: spread(measured.map((question) => question.readingLoad)),
    correctIsLongestCount: singles.filter((question) => question.correctIsLongest).length,
    nearMissCount: measured.filter((question) => question.sharedOptionRun >= nearMissRunWords).length,
    correctLetterCounts: countBy(singleChoiceIds, singles.map((question) => question.correctChoiceIds[0])),
    objectiveCounts: countBy([], questions.map((question) => question.objective.match(/^(\d\.\d)\b/)?.[1] ?? unmappedLabel)),
    considerationCounts: countBy([], measured.map((question) => question.consideration)),
    caseStudyQuestionCounts: countBy([], questions.flatMap((question) => question.caseStudyId ?? [])),
    caseStudySectionCounts: Object.fromEntries(referencedCaseStudyIds(questions).map((caseStudyId) => [
      caseStudyId,
      new Set(questions.filter((question) => question.caseStudyId === caseStudyId).map((question) => question.section)).size,
    ])),
  };
}

function measureQuestion(question: Question): QuestionMetrics {
  const stemWords = countWords(question.prompt);
  const choiceWords = new Map(question.choices.map((choice) => [choice.id, countWords(choice.text)]));
  const lengths = [...choiceWords.values()];
  const correctChoiceIds = question.kind === "single" ? [question.correctChoiceId] : question.correctChoiceIds;
  const correctWords = choiceWords.get(correctChoiceIds[0]) ?? 0;
  const otherWords = question.choices.filter((choice) => choice.id !== correctChoiceIds[0]).map((choice) => choiceWords.get(choice.id) ?? 0);
  return {
    id: question.id,
    consideration: question.objective.match(/\b(\d\.\d\.[a-z])\b/)?.[1] ?? unmappedLabel,
    kind: question.kind,
    caseStudyId: question.caseStudyId,
    stemWords,
    shortestChoiceWords: Math.min(...lengths),
    longestChoiceWords: Math.max(...lengths),
    readingLoad: stemWords + lengths.reduce((total, words) => total + words, 0),
    sharedOptionRun: longestSharedRun(question.choices.map((choice) => choice.text)),
    correctChoiceIds,
    correctIsLongest: question.kind === "single" && otherWords.every((words) => correctWords > words),
  };
}

// The longest run of consecutive words, ignoring case and edge punctuation, that any two options share.
function longestSharedRun(texts: readonly string[]): number {
  const options = texts.map((text) => text.toLowerCase().split(/\s+/).map((word) => word.replace(/^\W+|\W+$/g, "")).filter(Boolean));
  return Math.max(0, ...options.flatMap((first, index) =>
    options.slice(index + 1).map((second) => longestCommonRun(first, second))));
}

function longestCommonRun(first: readonly string[], second: readonly string[]): number {
  let longest = 0;
  let previous = new Array<number>(second.length + 1).fill(0);
  for (const word of first) {
    const current = new Array<number>(second.length + 1).fill(0);
    second.forEach((other, index) => {
      if (word === other) current[index + 1] = previous[index] + 1;
    });
    longest = Math.max(longest, ...current);
    previous = current;
  }
  return longest;
}

function spread(values: readonly number[]): Spread {
  if (values.length === 0) return { min: 0, median: 0, max: 0 };
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  return { min: sorted[0], median, max: sorted[sorted.length - 1] };
}

function countBy(keys: readonly string[], values: readonly string[]): Record<string, number> {
  const counts: Record<string, number> = Object.fromEntries(keys.map((key) => [key, 0]));
  for (const value of values) counts[value] = (counts[value] ?? 0) + 1;
  return counts;
}
