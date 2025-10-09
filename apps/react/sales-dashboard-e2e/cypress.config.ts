import { nxE2EPreset } from "@nx/cypress/plugins/cypress-preset";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: "src",
      bundler: "vite",
      webServerCommands: {
        default: "npx nx run sales-dashboard:dev",
        production: "npx nx run sales-dashboard:preview",
      },
      ciWebServerCommand: "npx nx run sales-dashboard:preview",
      ciBaseUrl: "http://localhost:4200",
    }),
    baseUrl: "http://localhost:4200",
  },
});
