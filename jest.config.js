// Jest config for Web UI
module.exports = {
  collectCoverageFrom: [
    'src/web/**/*.{js,jsx,ts,tsx}',
    '!src/web/**/*.d.ts',
    '!src/web/index.tsx',
    '!src/web/serviceWorker.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/web',
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^react-native$': 'react-native-web',
  },
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup.js',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/web/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/web/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testURL: 'http://localhost',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
