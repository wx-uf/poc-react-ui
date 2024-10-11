module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier", // Use eslint-config-prettier to disable conflicting rules
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-unused-modules": [1, { unusedExports: true }], // Warns on unused exports
    "react/prop-types": "off", // Disable prop-types as we use TypeScript
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
