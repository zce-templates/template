import test from 'ava'

import path from 'path'
import { generator } from 'zce-cli'
import { util } from 'zce-cli/lib/common'
import mockPrompt from 'mock-prompt'

test.before(async t => {
  const cwd = path.join(__dirname, 'dist')
  await util.mkdirp(cwd)
  process.chdir(cwd)
})

test.after(async t => {
  const cwd = process.cwd()
  process.chdir(__dirname)
  await util.rimraf(cwd)
})

test.serial('minimal', async t => {
  mockPrompt({
    name: 'minimal-template',
    version: '0.1.0',
    features: {}
  })

  await generator.init('../../', 'minimal-template', { force: true, save: false })

  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/template/README.md')))
  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/.gitignore')))
  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/index.js')))
  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/LICENSE')))
  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/package.json')))
  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/README.md')))
})

test.serial('maximal', async t => {
  mockPrompt({
    name: 'maximal-template',
    version: '0.1.0',
    description: 'a maximal template',
    author: 'zce <w@zce.me> (https://zce.me/)',
    organization: 'zce-mock',
    source: 'tmpl',
    features: { metadata: true, prompts: true, filters: true, helpers: true, plugin: true, docs: true, test: true },
    complete: 'callback'
  })

  await generator.init('../../', 'maximal-template', { force: true, save: false })

  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/docs/maximal-template.md')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/test/maximal-template.test.js')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/tmpl/README.md')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/.gitignore')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/.travis.yml')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/index.js')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/LICENSE')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/package.json')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/README.md')))
})
