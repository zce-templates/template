module.exports = {
  name: '<%= name %>',
  version: '<%= version %>'<% if (source !== 'template') { %>,
  source: '<%= source %>'<% } if (features.metadata) { %>,
  metadata: {
    // TODO: predefined template metadata
    // e.g. year: new Date().getFullYear()
  }<% } if (features.prompts) { %>,
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
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
  }<% } if (features.filters) { %>,
  filters: {
    // TODO: custom filters
    // e.g. '**/*.scss': answers => answers.sass
  }<% } if (features.helpers) { %>,
  helpers: {
    // TODO: custom helpers
    // e.g. uppercase: str => str.toUpperCase()
  }<% } if (features.plugin) { %>,
  plugin: (files, app, next) => {
    // answers
    const metadata = app.metadata()
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
