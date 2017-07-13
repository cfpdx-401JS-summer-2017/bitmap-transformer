const InvertTransformer = require('../lib/invert-transformer');
const GrayscaleTransformer = require('../lib/grayscale-transformer');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
  }

  sendType(type) {
    if(type === 'invert') {
      const t = new InvertTransformer(buffer);
      t.transform();
    } else if(type === 'gray') {
      const g = new GrayscaleTransformer(buffer);
      g.transform();
    }
  };
}

module.exports = BitmapTransformer;
