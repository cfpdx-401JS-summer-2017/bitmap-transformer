class InvertTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.type = type;
  }
change(buffer) {
  for (var i = 0; i <= this.buffer.length; i++) {
    this.buffer[i] = 255 - this.buffer[i]
  }
  return this.buffer;
  }
}
module.exports = InvertTransformer;
