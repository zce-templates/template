const path = require('path')
const { exec } = require('child_process')

module.exports = {
  name: 'template',
  version: '0.2.0',
  source: 'template',
  metadata: {
    year: new Date().getFullYear()
  },
  prompts: {
    name: {
      type: 'input',
      message: 'Template name'
    },
    version: {
      type: 'input',
      message: 'Template version'
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
    organization: {
      type: 'input',
      message: 'Template organization name',
      default: 'zce-templates'
    },
    source: {
      type: 'input',
      message: 'Template source directory name',
      default: 'template'
    },
    features: {
      type: 'checkbox',
      message: 'Choose the features you need',
      choices: [
        { name: 'Use metadata', value: 'metadata' },
        { name: 'Custom prompts', value: 'prompts', checked: true },
        { name: 'Custom filters', value: 'filters' },
        { name: 'Custom helpers', value: 'helpers' },
        { name: 'Custom plugin', value: 'plugin' },
        { name: 'Custom complete', value: 'complete' },
        { name: 'Additional docs', value: 'docs' },
        { name: 'Automatic test', value: 'test' }
      ]
    },
    complete: {
      type: 'list',
      message: 'Complete type',
      when: answers => answers.features.includes('complete'),
      choices: [
        { name: 'Message', value: 'message' },
        { name: 'Callback', value: 'callback' }
      ]
    }
  },
  filters: {
    'docs/**': answers => answers.features.includes('docs'),
    'test/**': answers => answers.features.includes('test'),
    '.travis.yml': answers => answers.features.includes('test')
  },
  complete: context => {
    const { dest } = context
    const reldest = path.relative(process.cwd(), dest) || './'
    exec('git init', { cwd: dest }, () => console.log('✨  new template →', reldest, '✨\n\n'))
  }
}
