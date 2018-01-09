# `@{{cookiecutter.app_owner}}/{{cookiecutter.app_name}}`

{{cookiecutter.package_description}}

## Installation

Update your project's `package.json`, this will download the `@{{cookiecutter.app_owner}}/{{cookiecutter.app_name}}` plugin
to your `node_modules` directory.

```
npm install '{{cookiecutter.package_github_url}}.git#release/1.x' --save
```

## Development

- Built in [TypeScript](http://www.typescriptlang.org/). `npm run build` and `npm run watch`.
- Tests in [Jasmine](https://jasmine.github.io/), run with [Karma](https://karma-runner.github.io/). `npm run tslint` and `npm run test`.
- Source files in [`src/`](src/).
- Compiled to ES5 using the CommonJS module loader, in [`dist/`](dist/).
- Source maps and declaration files are available in [`dist/`](dist/).


## Maintainer

- {{cookiecutter.author_name}} <{{cookiecutter.author_email}}>
