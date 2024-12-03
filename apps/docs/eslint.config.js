import eslintConfigReact from '@repo/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [
  { ignores: ['.netlify', '.react-router', 'build', 'node_modules', 'public', '.turbo'] },
  ...eslintConfigReact
];
