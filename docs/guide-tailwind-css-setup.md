# Tailwind CSS with Next.js

## Installation Guide

**1. Install Tailwind CSS**

```bash
# Install dependencies
$ npm install -D tailwindcss postcss autoprefixer

# Run the init command to generate both "tailwind.config.js" and "postcss.config.js
$ npx tailwindcss init -p
```

**2. Configure `tailwind.config.js` file**

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**3. Add the Tailwind directives to `./src/styles/globals.css` or `./src/styles/globals.<scss|sass>` file**

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**4. Config next.config.js** (Optional)
Config this file if you wanna use SASS feature (like mixin, variable,...) outside the styles folder

```bash
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
  },
};
```

> These paths are based on my repository next-js-setup
