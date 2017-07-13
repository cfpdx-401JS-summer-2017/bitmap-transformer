const assert = require('assert');
const fs = require('fs');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');

describe('bitmap header', () => {
    let buffer = null;
    before(() => {
        const header = new BitmapHeader();
        const path = './tests/test-bitmap.bmp';
        buffer = header.createBuf(path);
      });
    it('has correct specs', () => {
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });
    it('parses header data', () => {
        const header = new BitmapHeader();
        const path = './tests/test-bitmap.bmp';
        header.findBitmapValues(buffer, path);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});
