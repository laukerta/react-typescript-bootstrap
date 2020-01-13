module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // adds rules from create-react-app bootstrap tool
    'react-app',
    // adds recommended javascript rules
    'eslint:recommended',
    // adds recommended react (jsx/tsx) rules
    'plugin:react/recommended',
    // disables javascript rules from eslint:recommended conflicting with typescript
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {}
};
