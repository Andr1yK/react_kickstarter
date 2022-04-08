module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
    "plugin:react-hooks/recommended",
  ],
  "rules": {
    "no-console": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/require-default-props": "off"
  }
};
