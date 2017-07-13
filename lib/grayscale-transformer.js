class GrayscaleTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.r = 1;
    this.g = 1;
    this.b = 1;
  }
change() {
  console.log('grayscale: ', this.buffer);
  // HINT: grayscale assigns the average of all three colors
  // as the new value for each color
}
}

module.exports = GrayscaleTransformer;
