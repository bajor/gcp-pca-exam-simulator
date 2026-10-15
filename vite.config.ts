import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Each practice exam's question data gets its own chunk, so no chunk grows past the size limit as exams are
// published. The question model that the application and every exam import gets its own chunk, so no exam's
// chunk carries it, and changing one exam's data leaves the other exams' chunks unchanged.
const questionModel = /\/src\/domain\/(questions|caseStudies)\.ts$/;
const practiceExamData = /\/src\/data\/questionSets\/(practice\d+)\//;

export default defineConfig({
  base: "/gcp-pca-exam-simulator/",
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "questions", test: questionModel },
            { name: (id) => practiceExamData.exec(id)?.[1] },
          ],
        },
      },
    },
  },
});
