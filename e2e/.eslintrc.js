module.exports = {
  root: true,
  env: {
    browser: true,
    jasmine: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jasmine/recommended',
    // disables javascript rules from eslint:recommended conflicting with typescript
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // disable stylistic eslint rules which conflict with prettier
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['jasmine', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  rules: {
    '@typescript-eslint/member-ordering': 'error',
    'lines-between-class-members': 'error'
  }
};
