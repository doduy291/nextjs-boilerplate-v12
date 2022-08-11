# Next.js Setup

This is a stater template for NextJS and Typescript.

### Tech Stack

- [NextJS](https://nextjs.org) - A React framework that enables you to build superfast and extremely user-friendly static websites.
- [Typescript](https://www.typescriptlang.org) - A strongly typed programming language that builds on JavaScript.
- [ESlint](https://eslint.org) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Husky](https://www.npmjs.com/package/husky) - Git hooks that allows custom scripts to be ran against your repository.
- [Lint-staged](https://github.com/okonet/lint-staged) - Helping [Husky](https://www.npmjs.com/package/husky) to run linters against staged git files. (require [Husky](https://www.npmjs.com/package/husky))
- [Commitlint](https://commitlint.js.org/#/) - A tool that lints your commit messages and makes sure they follow a set of rules. (require [Husky](https://www.npmjs.com/package/husky))

## Getting Started

**1. Clone the repository and install dependencies**

```bash
$ git clone https://github.com/doduy291/next-js-setup.git <YOUR_FOLDER_NAME>
$ cd <YOUR_FOLDER_NAME>
$ npm install
```

**2. Enable husky**

```bash
$ npm run prepare
```

> ⚠️ Ensure that you have got a Git repository, otherwise run this command: `git init`

**3. Development**

```bash
$ npm run dev
```

### Commitlint Usage

In general the pattern mostly looks like this:

```bash
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```bash
$ git commit -m "build: add new file type"
or
$ git commit -m "fix(server): send cors headers
```

**Type using**

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore:** Other changes that do not modify src or test files
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **revert:** Reverts a previous commit
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

## Configs

#### **`.eslintrc.json`**

More rules: [@typescript-eslint](https://typescript-eslint.io/rules/) and [@next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)

```js
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@next/next/no-img-element": "off"
  }
}
```

#### **`tsconfig.json`**

See more TSConfig references: [docs](https://www.typescriptlang.org/tsconfig)

```js
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "allowUnreachableCode": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

#### **`lint-staged.config.js`**

Using `npx tsc` for Typescript checking and `npx eslint` for Eslint checking

```js
module.exports = {
  "**/*.(ts|tsx)": () => "npx tsc --noEmit --pretty",
  "**/*.(ts|tsx|js|jsx)": (filenames) => `npx eslint ${filenames.join(" ")}`,
};
```

#### **`commitlint.config.js`**

Read configuration docs: [Configuration](https://commitlint.js.org/#/reference-configuration?id=configuration) and [Rules](https://commitlint.js.org/#/reference-rules?id=rules)

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "release",
        "style",
        "test",
      ],
    ],
  },
};
```

## Additional Documents

- [Tailwind CSS Setup Guides](https://github.com/doduy291/next-js-setup/blob/master/docs/guide-tailwind-css-setup.md)
