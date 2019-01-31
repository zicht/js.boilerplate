module.exports = function (config) {
    const configuration = {
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            {
                pattern: 'src/**/*.ts'
            },
            {
                pattern: 'test/**/*.ts'
            }
        ],
        preprocessors: {
            'src/**/*.ts': ['karma-typescript'],
            'test/**/*.ts': ['karma-typescript']
        },
        reporters: [
            'progress',
            'karma-typescript'
        ],
        karmaTypescriptConfig: {
            coverageOptions: {
                exclude: [
                    /test/i,
                    /node_modules/i
                ],
                threshold: {
                    global: {
                        statements: 100,
                        branches: 100,
                        functions: 100,
                        lines: 100
                    }
                }
            },
            exclude: {
                mode: 'replace',
                values: []
            },
            include: [
                'src/**/*.ts',
                'test/**/*.ts'
            ],
            reports: {
                clover: {
                    directory: 'coverage',
                    subdirectory: 'clover',
                    filename: 'coverage.xml'
                },
                html: {
                    directory: 'coverage',
                    subdirectory: 'html',
                    filename: 'coverage'
                }
            },
            tsconfig: './tsconfig.json'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: false,
        singleRun: true,
        browsers: [
            'ChromiumNoSandboxHeadless'
        ],
        customLaunchers: {
            ChromiumNoSandboxHeadless: {
                base: 'Chromium',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222'
                ]
            }
        }
    };

    config.set(configuration);
};
