import { candidateQuestionSets, draftQuestionSets } from "../src/data/questionSets/registry";
import { examSectionIds, type Question } from "../src/domain/questions";
import { measureQuestions, unmappedLabel, type QuestionSetMetrics, type Spread } from "./question-set-metrics";

const [questionSetId] = process.argv.slice(2);
if (!questionSetId) throw new Error("Usage: npm run question-set-report -- <question-set-id>");

const candidate = candidateQuestionSets.find((set) => set.id === questionSetId);
const draft = draftQuestionSets.find((set) => set.id === questionSetId);
const questions: readonly Question[] | undefined =
  candidate?.questions ?? draft?.sections.flatMap((section): readonly Question[] => section.questions);
if (!questions) throw new Error(`${questionSetId}: question set not found among drafts or candidates.`);

const source = candidate ? `candidate version ${candidate.version}` : `draft with ${draft?.sections.length ?? 0} of ${examSectionIds.length} sections`;
console.log(formatReport(`${questionSetId} (${source})`, measureQuestions(questions)));

function formatReport(title: string, metrics: QuestionSetMetrics): string {
  const rows = metrics.questions.map((question) => [
    question.id,
    question.consideration,
    question.kind,
    String(question.stemWords),
    `${question.shortestChoiceWords}-${question.longestChoiceWords}`,
    String(question.readingLoad),
    question.correctChoiceIds.join("+"),
    question.correctIsLongest ? "yes" : "no",
  ]);
  const repeated = Object.entries(metrics.considerationCounts)
    .filter(([consideration, count]) => consideration !== unmappedLabel && count > 1);
  const unmapped = metrics.questions
    .filter((question) => question.consideration === unmappedLabel)
    .map((question) => question.id);
  const singleCount = metrics.questions.length - metrics.multipleSelectCount;
  return [
    `Question set: ${title}`,
    `Questions: ${metrics.questions.length}, multiple-select: ${metrics.multipleSelectCount}`,
    "",
    table(["ID", "Consideration", "Kind", "Stem", "Options", "Reading", "Correct", "Correct longest"], rows),
    "",
    `Stem words: ${formatSpread(metrics.stemWords)}`,
    `Option words: ${formatSpread(metrics.choiceWords)}`,
    `Reading load: ${formatSpread(metrics.readingLoad)}`,
    `Correct option strictly longest: ${metrics.correctIsLongestCount} of ${singleCount} single-choice questions`,
    `Correct letters (single-choice): ${formatCounts(metrics.correctLetterCounts)}`,
    `Objectives: ${formatCounts(metrics.objectiveCounts)}`,
    `Considerations used more than once: ${repeated.length ? formatCounts(Object.fromEntries(repeated)) : "none"}`,
    `Questions without a consideration identifier: ${unmapped.length ? unmapped.join(", ") : "none"}`,
  ].join("\n");
}

function table(header: readonly string[], rows: readonly (readonly string[])[]): string {
  const widths = header.map((cell, column) => Math.max(cell.length, ...rows.map((row) => row[column].length)));
  return [header, ...rows].map((row) => row.map((cell, column) => cell.padEnd(widths[column])).join("  ").trimEnd()).join("\n");
}

function formatSpread(value: Spread): string {
  return `min ${value.min}, median ${value.median}, max ${value.max}`;
}

function formatCounts(counts: Readonly<Record<string, number>>): string {
  return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)).map(([key, count]) => `${key} ${count}`).join(", ");
}
