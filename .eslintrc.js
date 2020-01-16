module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    // adds rules from create-react-app bootstrap tool
    'react-app',
    // adds airbnb typescript rules
    'airbnb-typescript',
    // adds recommended javascript rules
    'eslint:recommended',
    // adds recommended react (jsx/tsx) rules
    'plugin:react/recommended',
    // adds recommended jest rules
    'plugin:jest/recommended',
    // disables javascript rules from eslint:recommended conflicting with typescript
    'plugin:@typescript-eslint/eslint-recommended',
    // adds recommended typescript rules
    'plugin:@typescript-eslint/recommended',
    // adds additional typescript rules which require type checking support
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // disables stylistic javascript rules which conflict with prettier
    'prettier',
    // disables stylistic react (jsx/tsx) rules which conflict with prettier
    'prettier/react',
    // disables stylistic typescript rules which conflict with prettier
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
  plugins: ['react', 'jest', '@typescript-eslint', 'functional'],
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
