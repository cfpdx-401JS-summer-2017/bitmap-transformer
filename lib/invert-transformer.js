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

    // console.log('uuuuu: ',this.r);

    }
  }

module.exports = InvertTransformer;

//
// for(var i=0; i<data.length; i++){
//     jsonObj[data[i].id] = data[i].name;
// }

// const transformed = {r: 221, g: 155, b: 50};
// const transformed = { b: 205, g: 100, r: 34 };
// return transformed;
// console.log(transformed.b);
// for (var i = 1; i < 20; i++) {
//     console.log(i)
//     const buf2 = Buffer.from(this.buffer[i].toString());
//     const buf3 = Buffer.from(this.buffer[i+1].toString());
//     const buf4 = Buffer.from(this.buffer[i+2].toString());
//
//     // let tmp = buf2.readInt8(0);
//     // let tmpObject = {b: '0', g: '0', r: '0'};
//     // transformed.b = 255 - buf2.readInt8(0);
//     // transformed.g = 255 - buf3.readInt8(0);
//     // transformed.r = 255 - buf4.readInt8(0);
//     // console.log(tmpObject);
//     // transformed.push(tmpObject);
//     transformed.b =
//     console.log(transformed);
//
// }
  // const transformed = true;
  // return transformed;
