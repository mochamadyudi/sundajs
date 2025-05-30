import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: 2020,
            },
        },
        plugins: {
            unicorn: eslintPluginUnicorn,
            "@typescript-eslint": typescriptPlugin,
            import: eslintPluginImport,
            "unused-imports": eslintPluginUnusedImports,
        },
        rules: {
            "no-constant-condition": "off",
            "no-unneeded-ternary": "off",
            "unicorn/no-nullish-coalescing": "off",
            "@typescript-eslint/prefer-optional-chain": "off",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-inferrable-types": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/strict-boolean-expressions": "off",
            "eqeqeq": ["error", "always"],
            "curly": "error",
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-return-await": "error",

            // Import Rules
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                },
            ],
            "import/no-unresolved": "off", // handled by TS

            // Unused imports
            "unused-imports/no-unused-imports": "off",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
        },
    },
];
