'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { createGame, click } = require('../game.js');

test('new game starts at zero clicks', () => {
  assert.strictEqual(createGame().clicks, 0);
});

test('click increments the click count', () => {
  assert.strictEqual(click(click(createGame())).clicks, 2);
});
