const {browserStackCustomLaunchers} = require('@zicht/js.util/test/karma/browser-stack');

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript', 'polyfill'],
        polyfill: [],
        files: [
            {pattern: 'src/**/*.ts'},
            {pattern: 'test/**/*.ts'},
            {pattern: 'node_modules/@zicht/*/src/**/*.ts'}
        ],
        preprocessors: {
            'src/**/*.ts': ['karma-typescript'],
            'test/**/*.ts': ['karma-typescript'],
            'node_modules/@zicht/*/src/**/*.ts': ['karma-typescript']
        },
        reporters: [
            'progress',
            'karma-typescript',
            'Browserstack'
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
                'test/**/*.ts',
                'node_modules/@zicht/*/src/**/*.ts'
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
        browserStack: {
            // Note that you need to set the BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY environment variables
            // https://www.browserstack.com/accounts/settings
            // https://automate.browserstack.com
            build: 'Karma test',
            project: '@{{cookiecutter.app_owner}}/{{cookiecutter.app_name}}',
            video: false
        },
        browsers: [
            'LocalChromium',
            ...(config.enableBrowserStack ? Object.keys(browserStackCustomLaunchers) : [])
        ],
        customLaunchers: {
            LocalChromium: {
                base: 'Chromium',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222'
                ]
            },
            ...browserStackCustomLaunchers,
        }
    });
};
