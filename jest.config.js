const {
  defaults
} = require("jest-config");

module.exports = {
  verbose: true,
  preset: "ts-jest",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  jest: {
    automock: false,
    setupFiles: ["./setupJest.js"],
  },
};