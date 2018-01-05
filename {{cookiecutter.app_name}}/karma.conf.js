/* global module */

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
                    /\.(d|spec|test)\.ts$/i,
                    /node_modules/i
                ]
            },
            exclude: [
                'demo'
            ],
            include: [
                'src/**/*',
                'test/**/*'
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
            compilerOptions: {
                target: 'es6',
                lib: [
                    "dom",
                    "es7"
                ]
            }
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
                    ' --remote-debugging-port=9222'
                ]
            }
        }
    };

    config.set(configuration);
};
