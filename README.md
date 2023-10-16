# Turborepo Svelte starter

This is built off [an official starter Turborepo](https://vercel.com/templates/svelte/turborepo-sveltekit-starter). I've added a ts-node server as an app to this mono repo. I am still trying to figure out env variables.

Install [pnpm](https://pnpm.io/installation) then install packages with `'pnpm i'` in the root folder to get this running. We will be using `pnpm` instead of `npm` to install packages.

To start the Apps run `'npm run dev'`.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-svelte
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [svelte-kit](https://kit.svelte.dev/) app
- `web`: another [svelte-kit](https://kit.svelte.dev/) app
- `ui`: a stub Svelte component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
