export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", 
      "\\.(svg)$": "jest-transform-stub",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setup/setupTests.ts"], 
  };