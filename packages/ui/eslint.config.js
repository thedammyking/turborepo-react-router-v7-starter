import eslintConfigReact from '@repo/eslint-config/react';
import storybook from 'eslint-plugin-storybook';

/** @type {import("eslint").Linter.Config} */
export default [
  { ignores: ['node_modules', '.turbo'] },
  ...eslintConfigReact,
  ...storybook.configs['flat/recommended']
];
