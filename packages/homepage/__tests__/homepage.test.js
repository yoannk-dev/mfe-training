'use strict';

const homepage = require('../src/main');
const assert = require('assert').strict;

assert.strictEqual(homepage(), 'Hello from homepage');
console.info('homepage tests passed');
