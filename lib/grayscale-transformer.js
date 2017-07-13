class GrayscaleTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
transform() {
  // HINT: grayscale assigns the average of all three colors
  // as the new value for each color
  // b : pixels.readInt8(i) because 8 bits in each pixel
  // start at 10 because PIXEL_OFFSET offset is 10
  console.log('grayscale-transformer: ', this.buffer);
  }
}


module.exports = GrayscaleTransformer;
