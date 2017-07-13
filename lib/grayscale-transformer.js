class GrayscaleTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
change() {
  // HINT: grayscale assigns the average of all three colors
  // as the new value for each color
  console.log('before: ',this.buffer);
  for (var i = 0; i <= this.buffer.length; i++) {
    this.buffer[i] = 255 - this.buffer[i]
  }
    console.log('after: ',this.buffer);
  }
}


module.exports = GrayscaleTransformer;
