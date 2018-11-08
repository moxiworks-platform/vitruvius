module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "no-undef": "off",
    "import/extensions": "off",
    "class-methods-use-this": "off",
    "arrow-body-style": "off",
    "no-mixed-operators": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
