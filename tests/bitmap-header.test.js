const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const bitmapUtilities = require('./bitmapUtilities');

describe('bitmap header', () => {
  let buffer = null;
  before(() => {
    const path = './tests/test-bitmap.bmp';
    buffer = bitmapUtilities.createBuffer(path);
  });
  it('has correct specs', () => {
    assert.ok(constants.PIXEL_OFFSET);
    assert.ok(constants.BITS_PER_PIXEL_OFFSET);
    assert.ok(constants.FILE_SIZE_OFFSET);
  });
  it('parses header data', () => {
    const header = new BitmapHeader(buffer);
    header.findBitmapValues(buffer);
    assert.equal(header.pixelOffset, 54);
    assert.equal(header.bitsPerPixel, 24);
    assert.equal(header.fileSize, 30054);
  });
});
