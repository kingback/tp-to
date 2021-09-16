# tp-to

[![Travis Status](https://img.shields.io/travis/kingback/tp-to.svg)](https://travis-ci.com/github/kingback/tp-to)
[![Coverage Status](https://coveralls.io/repos/github/kingback/tp-to/badge.svg?branch=main)](https://coveralls.io/github/kingback/tp-to?branch=main)
[![Download Weekly](https://img.shields.io/npm/dw/tp-to.svg?sanitize=true)](https://npmcharts.com/compare/tp-to?minimal=true)
[![License](https://img.shields.io/npm/l/tp-to.svg?sanitize=true)](https://github.com/kingback/tp-to)
[![Create by](https://img.shields.io/badge/by-kingback-green)](https://github.com/kingback)

Fast open website, like the [Town Port Scroll](https://dota2.fandom.com/wiki/Town_Portal_Scroll) and [Teleport](https://dota2.fandom.com/wiki/Teleport) abilities in DOTA2.

## Install

```bash
$ npm i tp-to -g # npm
$ yarn global add tp-to # yarn
```

## Usage

### Get started

![image](https://user-images.githubusercontent.com/471003/133584968-ca271b79-407a-46d1-aaf1-831a755ddd9b.png)


#### Basic

```bash
# add website
$ tp add gh # https://github.com/
$ tp add npm # https://www.npmjs.com/
$ tp add npm -d # https://docs.npmjs.com/

# open website
$ tp gh # https://github.com/
$ tp npm # https://www.npmjs.com/
$ tp npm -d # https://docs.npmjs.com/
```

#### Placeholder

```bash
# add website
$ tp add npm -p # https://www.npmjs.com/package/{p}
$ tp add npm -s # https://www.npmjs.com/search?q={s}
$ tp add gh -p=kingback # https://github.com/{p}，set default value: kingback

# open website
$ tp npm -p lodash # https://www.npmjs.com/package/lodash
$ tp npm -s react # https://www.npmjs.com/search?q=react
$ tp gh -p # https://github.com/kingback，use default value: kingback
$ tp gh -p tj # https://github.com/tj
```

### Advanced config（TODO）
