/* eslint-disable import/no-commonjs */
const { test } = require('tape');

const exported = require('../dist/cjs/index.js');

test('[cjs] it successfully exports commonjs named exports', (t) => {
  const exportedKeys = Object.keys(exported);

  t.ok(exportedKeys.includes('MerkleTree'));
  t.end();
});
