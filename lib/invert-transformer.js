class InvertTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.b = 0;
    this.g = 0;
    this.r = 0;
  }
  // b : pixels.readInt8(i) because 8 bits in each pixel
  // start at 10 because PIXEL_OFFSET offset is 10
  transform() {
    // four binary digits = 8 bits
    //
    // hex 42 = 0100 0010
    // let buffer = Buffer.from([42, 4d, 66, 75]);
    // const buf2 = this.buffer.slice(0, 3);
    const buf2 = Buffer.from([0x00,0x00,0x36]);
    for (var key in buf2) {
      if (buf2.hasOwnProperty(key)) {
        // console.log(buf2[key]);
        console.log(255 - buf2[key]);
        // console.log('buf2: ',buf2+'  '+buf2.readInt8(0));
      }
    }

    // const transformed = {};
    // console.log('tb: ',this.buffer);
    // for (var i = 0; i < this.buffer.length; i++) {
    //   let tmp = this.buffer.readInt8(i);
      // console.log(tmp);
      // transformed.b = 255 - tmp;

//       for (var j = 1; j <=4; j++) {
//       transformed.g = 255 - this.buffer.readInt8(this.buffer[j]);
//       transformed.r = 255 - this.buffer.readInt8(this.buffer[j]);
// console.log(this.buffer.readInt8())
//       // console.log(transformed.b, transformed.g, transformed.r);
//     }
      // console.log(transformed);

    }
    // return transformed;
  }


module.exports = InvertTransformer;
