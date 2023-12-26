module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-restricted-syntax': 0,
      'no-await-in-loop': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'consistent-return': 'off',
      'import/no-unresolved': 'error',
      'lines-between-class-members': 0,
      'import/prefer-default-export': 0,
      'class-methods-use-this': 0,
      'import/no-cycle': 0,
      camelcase: 'off',
      'no-useless-constructor': 1,
      '@typescript-eslint/no-inferrable-types': 'off',
      'max-len': [
        2,
        {
          code: 300,
        },
      ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: true,
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
      'no-shadow': 'off',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'prefer-destructuring': ['error', { object: false, array: false }],
      'no-undefined': 2,
      'no-unused-vars': 1,
      'no-plusplus': 'off',
      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 3,
        },
      ],
      'linebreak-style': ['off'],
      'arrow-parens': 'off',
      'func-names': ['off'],
      'no-param-reassign': ['off'],
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      'prefer-arrow-callback': ['off'],
      'dot-notation': [
        'error',
        {
          allowPattern: '[a-zA-Z]',
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['___initialData___', '_request', '_method', '_baseSelector', '_bodenPoint', '_baseSelectorCity'],
        },
      ],
    },
  };