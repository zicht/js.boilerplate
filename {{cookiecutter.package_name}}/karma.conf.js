/*global module*/

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
            reports: {
                clover: {
                    directory: 'coverage',
                    subdirectory: 'clover',
                    filename: 'coverage.xml'
                },
                'html': {
                    directory: 'coverage',
                    subdirectory: 'html',
                    filename: 'coverage'
                }
            },
            compilerOptions: {
                target: 'es6'
            },
            exclude: [
                'demo'
            ]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_WARN,

        autoWatch: false,

        browsers: [
            'ChromeNoSandboxHeadless'
        ],

        customLaunchers: {
            ChromeNoSandboxHeadless: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    ' --remote-debugging-port=9222'
                ]
            }
        },

        singleRun: true
    };

    config.set(configuration);
};
