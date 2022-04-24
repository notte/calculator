module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
  },
};
