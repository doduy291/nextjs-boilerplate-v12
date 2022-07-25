# Next.js Setup

This is a stater template for NextJS and Typescript.

### Tech Stack

- [NextJS](https://nextjs.org) - A React framework that enables you to build superfast and extremely user-friendly static websites.
- [Typescript](https://www.typescriptlang.org) - A strongly typed programming language that builds on JavaScript.
- [ESlint](https://eslint.org) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Husky](https://www.npmjs.com/package/husky) - Git hooks that allows custom scripts to be ran against your repository.
- [Lint-staged](https://github.com/okonet/lint-staged) - Helping [Husky](https://www.npmjs.com/package/husky) to run linters against staged git files

## Getting Started

### 1. Clone the repository and install dependencies

```bash
$ git clone https://github.com/doduy291/next-js-setup.git <YOUR_FOLDER_NAME>
$ cd <YOUR_FOLDER_NAME>
$ npm install
```

### 2. Enable husky

```bash
$ npm run prepare
```

**_NOTE:_** Ensure that you have got a Git repository, otherwise run this command: `git init`

### 3. Development

```bash
$ npm run dev
```

## Configs

**`.eslintrc.json`**
<br>

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

**`tsconfig.json`**
<br>

More options: [Compiler Options](https://www.typescriptlang.org/tsconfig)

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
