# {{cookiecutter.app_name}}

{{cookiecutter.package_description}}

## Install

```
npm install {{cookiecutter.package_github_url}}.git --save
```

## Dev

- Built in [TypeScript](http://www.typescriptlang.org/).
- Tests in [Jasmine](https://jasmine.github.io/), run with [Karma](https://karma-runner.github.io/).
- Source files in [`src/`](src/).
- Compiled to ES6 using the CommonJS module loader, in [`dist/`](dist/).
- Source maps and declaration files are available in [`dist/`](dist/).

### Tests

Run unit tests:

```
npm run test
```

Run linting:

```
npm run lint
```

Run TypeScript compile:

```
npm run compile
```

## Maintainer

{{cookiecutter.author_name}} ([@{{cookiecutter.author_github_name}}](https://github.com/{{cookiecutter.author_github_name}})
