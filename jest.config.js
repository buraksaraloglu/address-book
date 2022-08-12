/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const path = require('path');

const fromRoot = d => path.join(__dirname, d);

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [`<rootDir>/src/**/*.{ts(x)}`],
  coverageDirectory: `coverage`,
  moduleDirectories: ['node_modules', fromRoot('tests')],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransform.js',
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '@/(.*)': fromRoot('src/$1'),
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  testEnvironment: `jsdom`,
  testPathIgnorePatterns: ['/node_modules/'],
};
