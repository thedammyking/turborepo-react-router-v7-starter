# `Turborepo` React Router v7 starter

A Turborepo starter template for a React Router v7 application.

## Using this template

Run the following command:

```sh
pnpm dlx create-turbo@latest -e https://github.com/thedammyking/turborepo-react-router-v7-starter
```
You can use other package managers like `npm` and `yarn` or just clone the repo and install the dependencies.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a [React Router](https://reactrouter.com/) app
- `web`: another [React Router](https://reactrouter.com/) app
- `@repo/ui`: a stub component & utility library shared by both `web` and `docs` applications
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: shared `tsconfig.json` used throughout the monorepo
- `@repo/prettier-config`: shared `prettier` configuration
- `@repo/stylelint-config`: shared `stylelint` configuration
- `@repo/tailwind-config`: shared Tailwind CSS configuration
- `@repo/vite-config`: shared Vite configuration

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Stylelint](https://stylelint.io/) for CSS linting
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Sass](https://sass-lang.com/) for CSS pre-processing
- [Husky](https://typicode.github.io/husky/) for Git hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- [Commitlint](https://commitlint.js.org/) for commit message linting
- [Netlify](https://www.netlify.com/) for deployment
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [Vitest](https://vitest.dev/) for testing
- [Storybook](https://storybook.js.org/) for UI development, documentation and testing
