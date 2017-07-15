const BitmapHeader = require('../lib/bitmap-header');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.offset = 0;
  }

  changeColor(fn) {
    const header = new BitmapHeader(buffer);
    header.findBitmapValues(buffer);
    const pixels = this.buffer.slice(header.pixelOffset);
    for (var i = 0; i < pixels.length; i = i + 3) {
      const color = {
        b: pixels.readInt8(i),
        g: pixels.readInt8(i + 1),
        r: pixels.readInt8(i + 2)
      }
      const { b, g, r } = fn(color)
      color[i] ? pixels.writeInt8(i, b) : pixels.writeInt8(0, b),
        color[i + 1] ? pixels.writeInt8(i + 1, b) : pixels.writeInt8(0, g),
        color[i + 2] ? pixels.writeInt8(i + 2, b) : pixels.writeInt8(0, r)
    }
  }
}
module.exports = BitmapTransformer;
