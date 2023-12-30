import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^@src(.*)$': '<rootDir>/src$1',
  },
  modulePathIgnorePatterns: ['__mocks__'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
};

export default config;
