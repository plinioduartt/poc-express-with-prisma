export default {
  roots: ['<rootDir>/src'],
  bail: 0,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.*\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)']
}
