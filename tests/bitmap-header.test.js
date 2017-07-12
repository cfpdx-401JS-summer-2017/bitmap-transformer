const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const getBitmap = require('./before-tests');
const BitmapHeader = require('../lib/bitmap-header');

// function BitmapHeader (buffer) {
//     this.pixelOffset = buffer.readUInt32LE(constants.PIXEL_OFFSET, 4);
//     this.bitsPerPixel = buffer.readUInt32LE(constants.BITS_PER_PIXEL_OFFSET, 2);
//     this.fileSize = buffer.readUInt32LE(constants.FILE_SIZE_OFFSET, 4);
// }

describe.only('bitmap header', () => {

    let buffer = null;
    before(() => {
        // DONE: read './test/test-bitmap.bmp' into buffer variable
        // const buffer = Buffer.from('./tests/test-bitmap.bmp');
        buffer = getBitmap();
    });

    it('has correct specs', () => {
        // DONE: read the docs to figure out what these values should be
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it('parses header data', () => {
        // TODO: use the constants to populate the following properties
        // on the BitmapHeader in its constructor

        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});
