module.exports = {
    displayName: "API",
    clearMocks: true,
    resetMocks: true,
    resetModules: true,
    testEnvironment: "node",
    verbose: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
