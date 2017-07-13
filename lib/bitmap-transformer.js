class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }

  transform(type) {
    const t = new type(this.buffer);
    t.change();
  }
}

module.exports = BitmapTransformer;
