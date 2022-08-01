module.exports = {
  "**/*.(ts|tsx)": () => "npx tsc --noEmit --pretty",
  "**/*.(ts|tsx|js|jsx)": (filenames) => `npx eslint ${filenames.join(" ")}`,
};
