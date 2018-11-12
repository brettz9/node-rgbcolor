module.exports = {
  extends: ['ash-nazg/sauron-node'],
  parserOptions: {
    sourceType: "module"
  },
  // Need to make explicit here for processing by jsdoc/check-examples
  plugins: [],
  env: {
    browser: true
  },
  settings: {
    polyfills: [],
    jsdoc: {
      additionalTagNames: {
        // In case we need to extend
        customTags: []
      },
      tagNamePreference: {
        arg: "param",
        return: "returns"
      },
      allowOverrideWithoutParam: true,
      allowImplementsWithoutParam: true,
      allowAugmentsExtendsWithoutParam: true,
      // For `jsdoc/check-examples` in `ash-nazg`
      matchingFileName: "dummy.md",
      rejectExampleCodeRegex: "^`",
    }
  },
  overrides: [
    {
      files: ["**/*.md"],
      rules: {
        "eol-last": ["off"],
        "no-console": ["off"],
        "no-undef": ["off"],
        "no-unused-vars": ["warn"],
        "padded-blocks": ["off"],
        "import/unambiguous": ["off"],
        "import/no-unresolved": ["off"],
        "node/no-missing-require": ["off"],
        "node/no-missing-import": ["off"]
      }
    }
  ],
  rules: {
    "capitalized-comments": "off",
    "max-len": "off",
    "no-magic-numbers": "off"
  }
};
