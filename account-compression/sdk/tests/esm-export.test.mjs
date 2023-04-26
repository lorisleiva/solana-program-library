import test from 'tape';

import * as exported from '../dist/esm/index.js';

test('[esm] it successfully exports esm named exports', (t) => {
  const exportedKeys = Object.keys(exported);

  t.ok(exportedKeys.includes('MerkleTree'));
  t.end();
});
