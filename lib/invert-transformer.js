class InvertTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }
change() {
  for (var i = 0; i <= this.buffer.length; i++) {
    this.buffer[i] = 255 - this.buffer[i]
  }
  return this.buffer;
  }
}
module.exports = InvertTransformer;
