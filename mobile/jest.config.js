module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/jest/jest-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@?react-navigation|react-navigation-redux-helpers|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|redux-saga|redux-saga-test-plan/.*)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atomic/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/atomic/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/atomic/organisms/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@templates/(.*)$': '<rootDir>/src/templates/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@generators/(.*)$': '<rootDir>/src/generators/$1',
  },
};
