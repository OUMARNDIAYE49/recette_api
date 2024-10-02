import globals from 'globals';
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jasmine: 'readonly',
        describe: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      vue,
    },
    rules: {},
  },
  {
    rules: {
      ...js.configs.recommended.rules,
      ...vue.configs['essential'].rules,
    },
  },
];
