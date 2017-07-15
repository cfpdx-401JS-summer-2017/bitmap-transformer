const constants = require( '../lib/bitmap-constants' );

class BitmapHeader {
  constructor( buffer ) {
    this.pixelOffset = 0;
    this.bitsPerPixel = 0;
    this.fileSize = 0;
    this.buffer = buffer;
  }

  findBitmapValues() {
    this.pixelOffset = this.buffer[ constants.PIXEL_OFFSET ];
    this.bitsPerPixel = this.buffer[ constants.BITS_PER_PIXEL_OFFSET ];
    this.fileSize = this.buffer.readInt32LE( constants.FILE_SIZE_OFFSET );
  }
}

module.exports = BitmapHeader;
