module.exports = {
  extends: [
    'himynameisdave/configurations/babel-node',
    'himynameisdave/configurations/typescript',
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/extensions': ['.ts'],
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        //  This is because eslint flags undefined vars. All good tho because TS catches this in the compiler.
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    //  Change these global rules
    "arrow-parens": ["error", "as-needed"],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    //  yikes:
    "object-curly-newline": ["off", {
      "minProperties": 4,
    }],
    "implicit-arrow-linebreak": "off",
    'id-denylist': ['error', 'callback', 'cb', 'f', 'd', 'e', 'err'],
    "unicorn/prevent-abbreviations": ["error", {
      "whitelist": {
        "fn": true,
      },
    }],
    //  I no longer care about strict file naming conventions, so these should be removed
    "unicorn/filename-case": "off",
    "filenames/match-regex": "off",

    //  These should be turned off in configurations/typescript
    "import/extensions": "off",
    "node/file-extension-in-import": "off",
    //  Claims that import/export are not support, should be turned off for configs/ts
    "node/no-unsupported-features/es-syntax": "off",
    "@typescript-eslint/array-type": ["error", {
      default: "array-simple",
    }],
    //  These are just goofy rules
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-type-alias": "off",
    //  Good but only as a warning
    "@typescript-eslint/no-unsafe-assignment": "warn",
    //  Just for this package.
    "node/no-unpublished-import": ["error", {
      "allowModules": [
        'hsl-regex',
        'hsla-regex',
      ]
    }]
  }
}
