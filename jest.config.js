module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        "^.+\\.vue$": "<rootDir>/node_modules/@vue/vue3-jest"
    }
};
