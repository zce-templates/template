import test from 'ava'

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { generator } from 'zce-cli'
import { util } from 'zce-cli/lib/common'
import mockPrompt from 'mock-prompt'

const readFile = promisify(fs.readFile)

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

  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/.gitignore')))

  const templateContent = await readFile(path.join(process.cwd(), 'minimal-template/template/README.md'), 'utf8')
  t.is(templateContent.trim(), '# <%= name %>')

  const indexContent = await readFile(path.join(process.cwd(), 'minimal-template/index.js'), 'utf8')
  t.is(indexContent.trim().length, 67)

  const packageContent = await readFile(path.join(process.cwd(), 'minimal-template/package.json'), 'utf8')
  t.is(packageContent.trim().length, 569)

  const readmeContent = await readFile(path.join(process.cwd(), 'minimal-template/README.md'), 'utf8')
  t.is(readmeContent.trim().length, 1122)

  const licenseContent = await readFile(path.join(process.cwd(), 'minimal-template/LICENSE'), 'utf8')
  t.is(licenseContent.trim().length, 1098)
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
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/tmpl/README.md')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/test/maximal-template.test.js')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/.gitignore')))
  t.true(await util.exists(path.join(process.cwd(), 'maximal-template/.travis.yml')))

  const templateContent = await readFile(path.join(process.cwd(), 'maximal-template/tmpl/README.md'), 'utf8')
  t.is(templateContent.trim(), '# <%= name %>\n\n> <%= description %>\n\n<!--\n- author: <%= author %>\n- version: <%= version %>\n- license: <%= license %>\n- repository: <%= repository %>\n -->')

  const indexContent = await readFile(path.join(process.cwd(), 'maximal-template/index.js'), 'utf8')
  t.is(indexContent.trim().length, 1177)

  const packageContent = await readFile(path.join(process.cwd(), 'maximal-template/package.json'), 'utf8')
  t.is(packageContent.trim().length, 864)

  const readmeContent = await readFile(path.join(process.cwd(), 'maximal-template/README.md'), 'utf8')
  t.is(readmeContent.trim().length, 1081)

  const licenseContent = await readFile(path.join(process.cwd(), 'maximal-template/LICENSE'), 'utf8')
  t.is(licenseContent.trim().length, 1098)
})
