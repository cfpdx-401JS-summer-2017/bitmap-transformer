const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
// const testBitmap = require('./test/test-bitmap');

describe.only('bitmap header', () => {

    let buffer = null;
    before(() => {
        // DONE: read './test/test-bitmap.bmp' into buffer variable
        const testBitmap = Buffer.from('./test/test-bitmap');
    });

    it('has correct specs', () => {
        // TODO: read the docs to figure out what these values should be
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it.skip('parses header data', () => {
        // TODO: use the constants to populate the following properties
        // on the BitmapHeader in its constructor
        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});
