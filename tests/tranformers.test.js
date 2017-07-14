const assert = require('assert');
const InvertTransformer = require('../lib/invert-transformer');
const GrayscaleTransformer = require('../lib/grayscale-transformer');
// const BitmapTransformer = require('../lib/bitmap-transformer');
const bitmapUtilities = require('../tests/bitmapUtilities');

// each pixel is made up of 3 bytes: b, g, r
describe('transformers', () => {
  let buffer = null;
  before(() => {
      const path = './tests/test-bitmap.bmp';
      buffer = bitmapUtilities.createBuffer(path);
  });
  it('invert', () => {
    // HINT: invert subtracts each value from 255
    const inv = new InvertTransformer(buffer);
    inv.transform();
    // const transformed = inv.transform()({
    //   r: 34,
    //   g: 100,
    //   b: 205
    // });
    //
    // assert.deepEqual(transformed, {
    //   r: 221,
    //   g: 155,
    //   b: 50
    // });
  });
  it('grayscale', () => {
    // HINT: grayscale assigns the average of all three colors
    // as the new value for each color
    const gray = new GrayscaleTransformer(buffer);
    gray.transform();
    // const transformed = gray.transform(type)({
    //   r: 34,
    //   g: 100,
    //   b: 205
    // });
    //
    // assert.deepEqual(transformed, {
    //   r: 113,
    //   g: 113,
    //   b: 113
    // });
  });
});
