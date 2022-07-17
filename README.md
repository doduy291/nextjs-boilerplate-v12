# Next.js setup

Starter code for a clean Next.js + TypeScript + ESLint + Husky project.

## Get started

### Install dependencies

```bash
# NPM
npm install

# Yarn
yarn
```

### Enable husky

```bash
# NPM
npm run prepare

# Yarn
yarn prepare
```

**_NOTE:_** Ensure that you have got a Git repository, otherwise run this command: `git init`

### Start dev server

```bash
# NPM
npm run dev

# Yarn
yarn dev
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
    "allowUnusedLabels": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
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
