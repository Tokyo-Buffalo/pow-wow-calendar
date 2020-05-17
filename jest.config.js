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
};
