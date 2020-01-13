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
    'plugin:@typescript-eslint/eslint-recommended',
    // adds recommended typescript rules
    'plugin:@typescript-eslint/recommended',
    // adds additional typescript rules which require type checking support
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
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
    sourceType: 'module',
    // 'tsconfigRootDir' and 'project' are needed for proper type checking support
    // needed for 'plugin:@typescript-eslint/recommended-requiring-type-checking'
    // NOTE: these configs double the time for linting the project
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ]
  }
};
