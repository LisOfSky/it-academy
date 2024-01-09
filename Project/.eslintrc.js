module.exports = {
    env: {
        node: true,
        es2021: true,
        mocha: true,
    },
    extends: ["eslint:recommended", "plugin:mocha/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {

    },
    globals: {
        browser: 'readonly',
        $: 'readonly',
    },
};