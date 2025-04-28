import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport
    },
    ignores: ['vite.config.ts'],
    settings: {
      react: {
        version: 'detect'
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        node: {
          paths: ['./'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.png'],
          alias: {
            utils: 'src/utils/*',
            assets: 'src/assets/*',
            components: 'src/components/*',
            store: 'src/store/*',
            pages: 'src/pages/*'
          }
        },
        typescript: {}
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/exhaustive-deps': 0,
      'prettier/prettier': [
        'error',
        {
          'no-inline-styles': false,
          endOfLine: 'auto'
        }
      ],
      'no-unexpected-multiline': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-no-target-blank': 'off',
      semi: 'error',
      curly: 'off',
      'no-duplicate-imports': 'error',
      'no-dupe-else-if': 'warn',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'error',
      'no-dupe-keys': 'error',
      'no-return-assign': 'error',
      'no-console': 'off',
      'semi-style': ['error', 'last'],
      'eol-last': ['error', 'always'],
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true
        }
      ],
      'import/no-named-as-default': 'off',
      'import/no-unresolved': ['error', { ignore: ['^@'], caseSensitive: true }],
      'import/named': 'off',
      'import/newline-after-import': 'error',
      'import/exports-last': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-nodejs-modules': ['error', { allow: ['react'] }],
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      'import/order': [
        'error',
        {
          // groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
          groups: [['external', 'builtin'], 'internal', ['sibling']],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
);
