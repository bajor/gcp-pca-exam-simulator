import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Each practice exam's question data gets its own chunk, so no chunk grows past the size limit as exams are
// published, and the data's cache survives application-code releases.
const practiceExamData = /\/src\/data\/questionSets\/(practice\d+)\//;

export default defineConfig({
  base: "/gcp-pca-exam-simulator/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return practiceExamData.exec(id)?.[1];
        },
      },
    },
  },
});
