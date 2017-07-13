const fs = require('fs');
const constants = require('../lib/bitmap-constants');

class BitmapHeader {
  constructor() {
    this.pixelOffset = 0;
    this.bitsPerPixel = 0;
    this.fileSize = 0;
  }

  createBuf(path) {
    const buffer = fs.readFileSync(path);
    return buffer;
  }

  findBitmapValues(buf) {
    this.pixelOffset = buf[constants.PIXEL_OFFSET];
    this.bitsPerPixel = buf[constants.BITS_PER_PIXEL_OFFSET];
    this.fileSize = buf.readInt32LE(constants.FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
