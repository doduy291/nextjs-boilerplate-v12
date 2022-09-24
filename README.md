# Next.js Setup

This is a stater template for NextJS and Typescript.

### Tech Stack

- [NextJS](https://nextjs.org) - A React framework that enables you to build superfast and extremely user-friendly static websites.
- [Typescript](https://www.typescriptlang.org) - A strongly typed programming language that builds on JavaScript.
- [Sass](https://sass-lang.com) - A preprocessor scripting language that is interpreted or compiled into CSS.
- [ESlint](https://eslint.org) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Husky](https://www.npmjs.com/package/husky) - Git hooks that allows custom scripts to be ran against your repository.
- [Lint-staged](https://github.com/okonet/lint-staged) - Helping [Husky](https://www.npmjs.com/package/husky) to run linters against staged git files.
- [Commitlint](https://commitlint.js.org/#/) - A tool that lints your commit messages and makes sure they follow a set of rules.
- [Stylelint](https://stylelint.io) - A linter that avoids errors and enforces conventions in CSS.

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

> ⚠️ Ensure that you have got a Git repository, otherwise run this command: `git init`.
> You can pass over this command if you installed packages before.

**3. Development**

```bash
$ npm run dev
```

## Usage Guides

### ESlint

You should install [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension in VSCode to improve error dectections

### Commitlint

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

### Stylelint

I recommend installing [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension in VSCode to show directly underlines for errors rather than typing `npx stylelint <path>` to check error

#### Autofix Stylelint errors on save with **`settings.json`** in VSCode

This is my configs ([Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) requirement)
I don't know why others have to disable `formatOnSave` though it seems to work with `codeActionOnSave`, I need to format some files like `.ts`,`.js`,... in Prettier extension, so still keep my `formatOnSave` is `true`

```bash
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "stylelint.validate": ["css", "scss"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "files.autoSaveDelay": 500
}
```

## Configs

#### **`.eslintrc.json`**

More rules: [@typescript-eslint](https://typescript-eslint.io/rules/), [@next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin), [React](https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules), [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#eslint-plugin-react-hooks) and [Import](https://www.npmjs.com/package/eslint-plugin-import)

```js
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:import/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [], // Only use "plugins" with customize rules
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
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

Using Typescript, Eslint and Stylelint checks

```js
module.exports = {
  "./src/**/*.(ts|tsx|js|jsx)": (filenames) =>
    `npx eslint ${filenames.join(" ")}`,
  "./src/**/*.(css|scss|sass|styles.(js|ts))": (filenames) =>
    `npx stylelint ${filenames.join(" ")}`,
};
```

> ⚠️ With CSS-in-JS, you should give a filename following this pattern `<FILENAME>.styles.<js|ts>`

#### **`commitlint.config.js`**

Read docs: [Configurations](https://commitlint.js.org/#/reference-configuration?id=configuration) and [Rules](https://commitlint.js.org/#/reference-rules?id=rules)

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

#### **`.stylelintrc.js`**

Read docs: [Configurations](https://stylelint.io/user-guide/configure), [Original rules](https://commitlint.js.org/#/reference-rules?id=rules) and [SCSS rules](https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/main/index.js)

```js
{
  "extends": ["stylelint-config-standard-scss"],
  "plugins": ["stylelint-order"],
  "rules": {
    "value-no-vendor-prefix": true,
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
    "font-family-name-quotes": null,
    "shorthand-property-no-redundant-values": null,
    "no-missing-end-of-source-newline": null,
    "declaration-empty-line-before": null,
    "indentation": null,
    "selector-list-comma-newline-after": "always-multi-line",
    "order/properties-order": [propertyOrder], // variable "propertyOrder in ".stylelintrc.js"
  }
}

```

## Additional Documents

- [Tailwind CSS Setup Guides](https://github.com/doduy291/next-js-setup/blob/master/docs/guide-tailwind-css-setup.md)
- [SASS Setup Guides](https://github.com/doduy291/next-js-setup/blob/master/docs/guide-sass-setup.md)
