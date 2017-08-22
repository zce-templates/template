module.exports = {
  name: '{{name}}',
  version: '{{version}}',
  {{^eq source 'template'}}
  source: '{{source}}',
  {{/eq}}
  {{#metadata}}
  metadata: {},
  {{/metadata}}
  {{#prompts}}
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
    },
    description: {
      type: 'input',
      message: 'Project description',
      default: 'Awesome {{name}} project'
    },
    author: {
      type: 'input',
      message: 'Project author'
    },
    version: {
      type: 'input',
      message: 'Project version'
    },
    license: {
      type: 'input',
      message: 'Project license'
    },
    repository: {
      type: 'input',
      message: 'Project repository'
    }
  },
  {{/prompts}}
  {{#filters}}
  filters: {
    // TODO: custom filters
    // eg. '**/*.scss': answers => answers.sass
  },
  {{/filters}}
  {{#helpers}}
  helpers: {
    // TODO: custom helpers
    // eg. uppercase: str => str.toUpperCase()
  },
  {{/helpers}}
  {{#plugin}}
  plugin: (files, app, next) => {
    // TODO: before filter
    next()
    // TODO: after render
  },
  {{/plugin}}
  {{#eq complete 'Callback'}}
  complete: context => {
    // TODO: complete callback
    console.log('  Good luck~ :-D')
  }
  {{/eq}}
  {{#eq complete 'String'}}
  // TODO: complete message
  complete: '  \{{answers.name}} => \{{dest}}, Good luck~ :-D'
  {{/eq}}
}
