module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'max-len': ['error', { code: 300 }],
    'no-nested-ternary': 1,
    'no-plusplus': 1,
  },
};
