import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    server: {
      deps: {
        inline: ["next-intl"],
      },
    },
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
