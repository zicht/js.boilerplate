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
                "baseUrl": "./",
                "declaration": true,
                "lib": ["dom", "dom.iterable", "es2017"],
                "module": "commonjs",
                "moduleResolution": "node",
                "noImplicitReturns": true,
                "noUnusedLocals": true,
                "noUnusedParameters": true,
                "outDir": "dist",
                "removeComments": true,
                "sourceMap": true,
                "strict": true,
                "target": "es5",

                // Support transpiling generators and Iterators in ES5
                // See: https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#new---downleveliteration
                "downlevelIteration": true,
                // Import emit helpers from tslib instead of defining them multiple times in the compiled code.
                // See: https://blog.mariusschulz.com/2016/12/16/typescript-2-1-external-helpers-library
                "importHelpers": true
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
                    '--remote-debugging-port=9222'
                ]
            }
        }
    };

    config.set(configuration);
};
