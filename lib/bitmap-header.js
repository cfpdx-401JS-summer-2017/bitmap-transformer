const constants = require('../lib/bitmap-constants.js');

class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readUInt32LE(constants.PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readUInt32LE(constants.BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readUInt32LE(constants.FILE_SIZE_OFFSET);
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
}

module.exports = BitmapHeader;