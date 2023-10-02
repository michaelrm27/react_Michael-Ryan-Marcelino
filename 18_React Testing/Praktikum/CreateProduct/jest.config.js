// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["@testing-library/react/dont-cleanup-after-each", "@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
};
