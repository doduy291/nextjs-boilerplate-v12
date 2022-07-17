module.exports = {
  "**/*.(ts|tsx)": () => "npx tsc --noEmit --pretty",
  "**/*.(ts|tsx|js)": (filenames) => `npx eslint ${filenames.join(" ")}`,
};
