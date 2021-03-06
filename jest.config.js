module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/utils/testUtils/fileMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/utils/testUtils/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!node_modules",
    "!src/**/?(*.)stories.{ts,tsx}",
    "!src/**/?(*.)test.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
    "!src/types/*",
    "!src/reportWebVitals.ts",
    "!src/serviceWorker.ts",
    "!.next",
    "!cypress",
    "!.storybook",
    "!src/**/_app.page.tsx",
    "!src/utils/testUtils",
    "!src/utils/storybook",
    "!src/**/_document.page.tsx",
  ],
}
