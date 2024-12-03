import eslintConfigReact from '@repo/eslint-config/react';

/** @type {import("eslint").Linter.Config} */
export default [{ ignores: ['node_modules', '.turbo'] }, ...eslintConfigReact];
