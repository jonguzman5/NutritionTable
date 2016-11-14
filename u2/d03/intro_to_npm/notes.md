What is npm?

1. Package manager for node. It is a way to get code libraries, called packages

Two parts:  website: https://npmjs.com and command `npm`

npm install ...
npm i --save pageres

2. > Look at package.json

MAJOR.MINOR.PATCH
http://semver.org/

Discuss Start scripts

Activity:
-----------------------------
npm install --save random-int

var randomInt = require('random-int');

randomInt(5);

Activity:
-----------------------------
npm install --save chalk
npm install --save cat-ascii-faces

var cats = require('cat-ascii-faces')
const chalk = require('chalk');

console.log(cats());
console.log(chalk.blue('Hello world!'));


Explore making your own package!
