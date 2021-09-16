# tp-to

[![Travis Status](https://img.shields.io/travis/kingback/tp-to.svg)](https://travis-ci.com/github/kingback/tp-to)
[![Coverage Status](https://coveralls.io/repos/github/kingback/tp-to/badge.svg?branch=main)](https://coveralls.io/github/kingback/tp-to?branch=main)
[![Download Weekly](https://img.shields.io/npm/dw/tp-to.svg?sanitize=true)](https://npmcharts.com/compare/tp-to?minimal=true)
[![License](https://img.shields.io/npm/l/tp-to.svg?sanitize=true)](https://github.com/kingback/tp-to)
[![Create by](https://img.shields.io/badge/by-kingback-green)](https://github.com/kingback)

Fast open website, like the Town Port Scroll and Teleport abilities in DOTA2.

## usage

### generate github release token

First [generate github token](https://github.com/settings/tokens/new)(`public_repo` is all you need)，then exports it in `.bashrc/.zshrc`(remember to restart your `bash/zsh`)

![](https://gw.alicdn.com/tfs/TB11BzS2FT7gK0jSZFpXXaTkpXa-2034-1020.png)

```
export CONVENTIONAL_GITHUB_RELEASER_TOKEN="your_token"
```

**Never ever expose your token in your repo**

### bind travis & coveralls

* [travis-cli](https://travis-ci.com/)
* [coveralls](https://coveralls.io/)

### commands

```bash
$ npm run build # build
$ npm run eslint # lint codes
$ npm run push # add & commit & push codes
$ npm run release:beta # release beta version
$ npm run release # release production version
```