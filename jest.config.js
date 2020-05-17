const {
  defaults
} = require("jest-config");
const {
  pathsToModuleNameMapper
} = require('ts-jest/utils');
const {
  compilerOptions
} = require('./tsconfig');



module.exports = {
  verbose: true,
  preset: "ts-jest",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  automock: false,
  setupFiles: ["./setupJest.ts"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "html"],
  coveragePathIgnorePatterns: ["tests", "/node_modules/"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -10
    }
  }
};