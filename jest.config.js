const {
  defaults
} = require("jest-config");

module.exports = {
  verbose: true,
  preset: "ts-jest",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  automock: false,
  setupFiles: ["./setupJest.ts"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "html"],
};