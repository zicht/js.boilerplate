# {{cookiecutter.app_name}}

{{cookiecutter.package_description}}

This is a TypeScript library that can be installed with `npm`.
The source files are placed in the `src` directory. The compiled source files are 
available in the `dist` folder. The files are compiled to `es6` using `commonjs` module loader. Source maps and 
declaration files are also available in the `dist` folder.

There is a [z](https://github.com/zicht/z-installer) configuration file included to perform common tasks to 
lint/compile/test the code. 

The TypeScript code is tested with tests written in [Jasmine](https://jasmine.github.io/) and can be run with 
[Karma](https://karma-runner.github.io/). Run `z ts:test` to execute the tests.
The tests will output code coverage in the `coverage` folder.

For TypeScript code a `tslint` configuration is added. Run `z ts:lint` to execute the linter.

When creating a new version use the command `npm version <version> -m'<message>` to make sure the package.json has the 
same version as the repository.

# Maintainer

- {{cookiecutter.author_name}} <{{cookiecutter.author_email}}>
