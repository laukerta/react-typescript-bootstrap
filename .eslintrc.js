module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    // covers rules from eslint, react, react-a11y (covers NOT react-hooks => airbnb/hooks)
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    // disables javascript rules from eslint:recommended conflicting with typescript
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // adds additional typescript rules which require type checking support
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // prettier, prettier/react, prettier/@typescript-eslint
    // disable stylistic rules for javascript, react, typescript
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
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
  plugins: ['jest', '@typescript-eslint', 'functional'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['src/setupTests.ts', '**/*.test.tsx'] }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ],
    '@typescript-eslint/member-ordering': 'error',
    'functional/immutable-data': 'error',
    'functional/no-let': 'error',
    'functional/prefer-type-literal': 'error'
  },
  overrides: [
    {
      files: ['*.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ]
};
