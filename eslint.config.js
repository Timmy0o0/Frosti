import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: false,
  astro: true,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  rules: {
    // Ignore the antfu/top-level-function rule
    "antfu/top-level-function": "off",
    "arrow-parens": ["warn", "always"],
  },
});
