module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/lib/jest.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "^interfaces(.*)$": "<rootDir>/src/interfaces$1",
    "^queries(.*)$": "<rootDir>/src/queries$1",
    "^lib(.*)$": "<rootDir>/src/lib$1",
  },
};
