const assert = require('assert');
const BitmapHeader = require('../lib/bitmap-header');
const BitmapTransformer = require('../lib/bitmap-transformer');
const InvertTransformer = require('../lib/invert-transformer');
const GrayscaleTransformer = require('../lib/grayscale-transformer');

describe('transformers', () => {
  let buffer = null;
  before(() => {
      const header = new BitmapHeader();
      const path = './tests/test-bitmap.bmp';
      buffer = header.createBuf(path);
  });

    it('invert', () => {
        // HINT: invert subtracts each value from 255
        const inv = new BitmapTransformer(buffer);
        const transformed = inv.change(invert)({
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
        // HINT: grayscale assigns the average of all three colors
        // as the new value for each color
        const gray = new GrayscaleTransformer(buffer);
        const transformed = gray.change(grayscale)({
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
