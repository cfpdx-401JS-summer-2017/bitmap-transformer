const assert = require('assert');
const invTransformer = require('../lib/invert-transformer');
const gsTransformer = require('../lib/grayscale-transformer');

describe('transformers', () => {

  it('invert', () => {

    const transformed = invTransformer({
      r: 34,
      g: 100,
      b: 205
    });

    assert.deepEqual(transformed, {
      r: 221,
      g: 155,
      b: 50
    });
  });
  it('grayscale', () => {

    const transformed = gsTransformer({
      r: 34,
      g: 100,
      b: 205
    });

    assert.deepEqual(transformed, {
      r: 113,
      g: 113,
      b: 113
    });
  });
});
