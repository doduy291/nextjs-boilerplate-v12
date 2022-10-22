# SASS with Next.js

## Installation Guide

**1. Install SASS**

```bash
# Install dependencies
$ npm install -D sass
```

**2. Change CSS filename from `*.css` into `*.(sass|scss)`**

**3. Config next.config.js** (Optional)
Config this file if you wanna use SASS feature (like mixin, variable,...) outside the styles folder

```bash
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
  },
};
```
