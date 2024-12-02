import eslintConfig from '@repo/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ['packages/**', 'apps/**']
  },
  ...eslintConfig
];
