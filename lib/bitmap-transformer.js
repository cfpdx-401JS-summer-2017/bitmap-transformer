const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }

  change(type) {
    // var meow = new {type};
    //
    // console.log('meow: ',meow);
    // console.log('type.name: ',type.name);
  };
}

module.exports = BitmapTransformer;
