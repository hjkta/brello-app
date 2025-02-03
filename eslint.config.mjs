import js from '@eslint/js';
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin';
import eslintImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules/*', 'vite.config.ts'],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      'import': eslintImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-undef': 'error',
      'react/react-in-jsx-scope': 'off',
      'quotes': ['error', 'single', {'avoidEscape': true}],
      'object-curly-spacing': ['error', 'never'],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/semi': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
          pathGroups: [
            {
              pattern: '@(~|@)/**',
              group: 'external',
              position: 'after',
            },
          ],
          distinctGroup: true,
          pathGroupsExcludedImportTypes: ['builtin', 'object'],
        },
      ],
    },
  },
];


// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
// import {fixupConfigRules} from '@eslint/compat';
// import stylistic from '@stylistic/eslint-plugin';
// import jest from 'eslint-plugin-jest';
// import eslintImport from 'eslint-plugin-import';

// export default [
//   {
//     ignores: ['node_modules/*', 'vite.config.ts', 'vite.config.mf.ts'],
//   },
//   {
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//   },
//   {
//     files: ['**/*.{js,ts,jsx,tsx}'],
//     languageOptions: {globals: globals.browser},
//   },
//   {
//     files: ['**/*.test.{js,ts,jsx,tsx}'],
//     languageOptions: {globals: globals.jest},
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
//   {
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   },
//   {
//     plugins: {
//       '@stylistic': stylistic,
//       jest,
//       'import': eslintImport,
//     },
//     rules: {
//       'no-undef': 'error',
//       'react/react-in-jsx-scope': 'off',
//       'quotes': ['error', 'single', {'avoidEscape': true}],
//       'object-curly-spacing': ['error', 'never'],
//       '@typescript-eslint/no-unused-vars': ['error'],
//       '@stylistic/comma-dangle': ['error', 'always-multiline'],
//       '@stylistic/semi': 'error',
//       'import/order': [
//         'error',
//         {
//           'newlines-between': 'always',
//           groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
//           pathGroups: [
//             {
//               pattern: '@(~|@)/**',
//               group: 'external',
//               position: 'after',
//             },
//           ],
//           distinctGroup: true,
//           pathGroupsExcludedImportTypes: ['builtin', 'object'],
//         },
//       ],
//     },
//   },
// ];
