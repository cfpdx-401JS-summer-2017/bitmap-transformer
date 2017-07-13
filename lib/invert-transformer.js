class InvertTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  // b : pixels.readInt8(i) because 8 bits in each pixel
  // start at 10 because PIXEL_OFFSET offset is 10
  transform() {
    console.log('invert-transformer: ', this.buffer);
  }
}

module.exports = InvertTransformer;
