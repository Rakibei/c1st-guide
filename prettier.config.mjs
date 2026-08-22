export default {
    plugins: ["@shopify/prettier-plugin-liquid"],

    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,

    overrides: [
        {
            files: "**/*.html",
            options: {
                parser: "liquid-html",
            },
        },
    ],
};
