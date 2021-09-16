# tp-to

[![Travis Status](https://img.shields.io/travis/kingback/tp-to.svg)](https://travis-ci.com/github/kingback/tp-to)
[![Coverage Status](https://coveralls.io/repos/github/kingback/tp-to/badge.svg?branch=main)](https://coveralls.io/github/kingback/tp-to?branch=main)
[![Download Weekly](https://img.shields.io/npm/dw/tp-to.svg?sanitize=true)](https://npmcharts.com/compare/tp-to?minimal=true)
[![License](https://img.shields.io/npm/l/tp-to.svg?sanitize=true)](https://github.com/kingback/tp-to)
[![Create by](https://img.shields.io/badge/by-kingback-green)](https://github.com/kingback)

Fast open website, like the [Town Port Scroll](https://dota2.fandom.com/wiki/Town_Portal_Scroll) and [Teleport](https://dota2.fandom.com/wiki/Teleport) abilities in DOTA2.

## install

```bash
$ npm i tp-to -g # npm
$ yarn global add tp-to # yarn
```

## usage

### Get started

```bash
# add website
$ tp add npm # npm
$ tp add gh # github
$ tp add gh -p=kingback # github profile

# open website
$ tp npm
$ tp gh
$ tp gh -p
$ tp gh -p tj #
```

### Advanced config（TODO）

Open Config UI

```bash
$ tp config
```

Update config.json and save.

```json
{
  "env": {
    "git": {
      ""
    }
  },
  "websites": {
    "gh": {
      "urls": [
        "https://github.com",
        "https://github.com/$${git.group}/$${git.name}",
        ["https://github.com/${o}", {
          "p": "kingback",
          "a": true
        }]
      ],
      "env": {
        "git": {
          "group": "kingback"
        }
      }
    }
    "pub": {
      "urls": [
        "http://prod.pub.com",
        ["http://st.pub.com", { "st": true }],
        ["http://test.pub.com", { "t": true }],
        ["http://dev.pub.com", { "d": true }]
      ]
    }
  }
}
```

Save.
