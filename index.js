module.exports = {
  name: 'template',
  version: '0.1.0',
  source: 'template',
  metadata: {
    year: new Date().getYear() + 1900
  },
  prompts: {
    name: {
      type: 'input',
      message: 'Template name'
    },
    description: {
      type: 'input',
      message: 'Template description',
      default: 'Awesome zce-cli template'
    },
    author: {
      type: 'input',
      message: 'Template author'
    },
    version: {
      type: 'input',
      message: 'Template version'
    },
    source: {
      type: 'input',
      message: 'Template source directory',
      default: 'template'
    },
    metadata: {
      type: 'confirm',
      message: 'Use metadata',
      default: false
    },
    prompts: {
      type: 'confirm',
      message: 'Use custom prompts',
      default: true
    },
    filters: {
      type: 'confirm',
      message: 'Use custom filters',
      default: false
    },
    helpers: {
      type: 'confirm',
      message: 'Use custom helpers',
      default: false
    },
    plugin: {
      type: 'confirm',
      message: 'Use custom plugin',
      default: false
    },
    complete: {
      type: 'list',
      message: 'Use custom plugin',
      choices: ['String', 'Callback']
    }
  },
  complete: context => {
    console.log('  Good luck~')
  }
}
