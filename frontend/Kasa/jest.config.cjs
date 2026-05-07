module.exports = {
  testEnvironment: 'jsdom',
transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.cjs',
    '\\.(png|jpg|jpeg|gif|svg|webp)$': '<rootDir>/__mocks__/fileMock.cjs',
    '^@fortawesome/react-fontawesome$': '<rootDir>/__mocks__/fontAwesomeMock.cjs',
    '^@fortawesome/free-solid-svg-icons$': '<rootDir>/__mocks__/iconsMock.cjs',
  },
};
