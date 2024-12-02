# `Turborepo` React Router v7 starter

A Turborepo starter template for a React Router v7 application.

## Using this example

Run the following command:

```sh
pnpm dlx create-turbo@latest -e https://github.com/thedammyking/turborepo-react-router-v7-starter
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [React Router](https://reactrouter.com/) app
- `web`: another vanilla [React Router](https://reactrouter.com/) app
- `@repo/ui`: a stub component & utility library shared by both `web` and `docs` applications
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/prettier-config`: shared `prettier` configuration
- `@repo/stylelint-config`: shared `stylelint` configuration
- `@repo/tailwind-utils`: utility functions for Tailwind CSS
- `@repo/tailwind-config`: shared Tailwind CSS configuration

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Stylelint](https://stylelint.io/) for CSS linting
- [Tailwind CSS](https://tailwindcss.com/) for styling
