import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: "latest",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
            import: eslintPluginImport,
            "unused-imports": eslintPluginUnusedImports,
        },
        rules: {
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-inferrable-types": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
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
