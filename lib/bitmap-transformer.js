class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }

  // .slice(headerOffset);

changeColor(fn) {
  // const pixels = this.buffer;
    for (var i = 0; i < pixels.length; i+3){
        const color = {
          b: pixels.readInt8(i),
          g: pixels.readInt8(i+2),
          r: pixels.readInt8(i+3)
        }
        const {b, g, r} = fn()
          pixels.writeIn8(i, b),
          pixels.writeIn8(i+1, g),
          pixels.writeIn8(i+2, r)

  }

}
}
module.exports = BitmapTransformer;
