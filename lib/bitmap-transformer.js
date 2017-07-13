const fs = require('fs');
// const InvertTransformer = require('invert-transformer');

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
