module.exports = {
  name: '<%= name %>',
  version: '<%= version %>'<% if (source !== 'template') { %>,
  source: '<%= source %>'<% } if (features.includes('metadata')) { %>,
  metadata: {
    // TODO: predefined template metadata
    // e.g. year: new Date().getFullYear()
  }<% } if (features.includes('prompts')) { %>,
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
    },
    version: {
      type: 'input',
      message: 'Project version'
    },
    description: {
      type: 'input',
      message: 'Project description',
      default: 'Awesome <%= name %> project'
    },
    author: {
      type: 'input',
      message: 'Project author'
    },
    license: {
      type: 'input',
      message: 'Project license'
    },
    repository: {
      type: 'input',
      message: 'Project repository'
    }
  }<% } if (features.includes('filters')) { %>,
  filters: {
    // TODO: custom filters
    // e.g. '**/*.scss': answers => answers.sass
  }<% } if (features.includes('helpers')) { %>,
  helpers: {
    // TODO: custom helpers
    // e.g. uppercase: str => str.toUpperCase()
  }<% } if (features.includes('plugin')) { %>,
  plugin: (files, app, next) => {
    // app.metadata() => answers
    // TODO: before filter
    next()
    // TODO: after template render
  }<% } if (complete === 'callback') { %>,
  complete: context => {
    // TODO: generate complete callback
    console.log('  Good luck~ :-D')
  }<% } else if (complete === 'message') { %>,
  // TODO: generate complete message
  complete: '  <%= "${ answers.name }" %> => <%= "${ dest }" %>, Good luck~ :-D'<% } %>
}
