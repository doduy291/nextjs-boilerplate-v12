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
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**3. Add the Tailwind directives to `./styles/globals.css` file**

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
