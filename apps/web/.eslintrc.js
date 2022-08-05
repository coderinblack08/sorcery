module.exports = {
  root: true,
  rules: {
    "no-restricted-imports": ["error", { patterns: ["@/features/*/*"] }],
  },
  extends: ["custom"],
};
