# Next.js Setup

Starter code for a clean Next.js + TypeScript + ESLint + Lint-staged + Husky project.

### Tech Stack

- <img src="https://img.icons8.com/color/48/000000/nextjs.png" width="35px" alt="NextJS" /> [NextJS]("https://nextjs.org")
- <img src="https://img.icons8.com/color/48/000000/typescript.png" width="35px" alt="Typescript" /> [Typescript]("https://www.typescriptlang.org")

## Getting Started

### 1. Clone the repository and install dependencies

```bash
$ git clone https://github.com/doduy291/next-js-setup.git <YOUR_FOLDER_NAME>
$ cd <YOUR_FOLDER_NAME>
$ npm install
```

### 2. Enable husky

```bash
npm run prepare
```

**_NOTE:_** Ensure that you have got a Git repository, otherwise run this command: `git init`

### 3. Development

```bash
npm run dev
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
