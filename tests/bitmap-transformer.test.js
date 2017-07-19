const fs = require('fs');
const assert = require('assert');
const invTransformer = require('../lib/invert-transformer');
const BitmapTransformer = require('../lib/bitmap-transformer');
const bitmapUtilities = require('../tests/bitmapUtilities');
const diff = require('diff-buf');

describe('bitmap file transformer', () => {
  let buffer = null;
  before(() => {
    const path = './tests/test-bitmap.bmp';
    buffer = bitmapUtilities.createBuffer(path);
  });
  it('test whole transform', () => {
    const bitmap = new BitmapTransformer(buffer);
    bitmap.changeColor(invTransformer);
    return fs.writeFileSync('./tests/inverted-expected.bmp', bitmap.buffer);
    const testBuffer = fs.readFileSync('./tests/inverted-expected.bmp');
    assert.deepEqual(bitmap.buffer, testBuffer);
  });
});
