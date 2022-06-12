module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript', 'plugin:cypress/recommended'],
  rules: {
    'react/require-default-props': ['error', {
      classes: 'defaultProps',
      functions: 'defaultArguments',
    }],
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
    }],
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: "either",
    }],
  },
};
