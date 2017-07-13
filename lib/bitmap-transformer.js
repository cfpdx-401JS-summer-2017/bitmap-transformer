const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }

  setConstructor(type) {
    // const tmp = {type};
    // {type}.change();
    var meow = new {type};

    console.log('meow: ',meow);
    // console.log('type.name: ',type.name);
    // var obj = type;
    // let tmp = obj.name;
    // let t = new tmp;
    // console.log(t);
  };
}

module.exports = BitmapTransformer;
