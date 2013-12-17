name: 'grasp'
author: 'George Zahariev'
version: '0.2.0'
homepage: 'http://graspjs.com'
description: 'JavaScript structural search, replace, and refactor'
keywords:
  'javascript'
  'search'
  'replace'
  'refactor'
  'structural'
  'ast'

files:
  'bin'
  'lib'
  'README.md'
  'LICENSE'
main: './lib/'
bin:
  grasp: './bin/grasp'

bugs: 'https://github.com/gkz/grasp/issues'
licenses:
  * type: 'MIT'
    url: 'https://raw.github.com/gkz/grasp/master/LICENSE'
  ...

engines:
  node: '>= 0.8.0'
repository:
  type: 'git'
  url: 'git://github.com/gkz/grasp.git'
scripts:
  test: 'make test'
  build: 'make build'

dependencies:
  acorn: '~0.4.2'
  'prelude-ls': '~1.0.3'
  'cli-color': '~0.2.2'
  async: '~0.2.9'
  optionator: '~0.1.1'
  'grasp-squery': '~0.2.0'
  'grasp-equery': '~0.2.0'
  'grasp-syntax-javascript': '~0.1.0'

dev-dependencies:
  LiveScript: '~1.2.0'
  mocha: '~1.8.2'
  istanbul: '~0.1.43'

prefer-global: true
