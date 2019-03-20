// Jest config for Native UI

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/AppEntry.js',
  ],
  coverageDirectory: '<rootDir>/../../coverage/native',
  preset: 'jest-expo',
  rootDir: 'src/native',
};
