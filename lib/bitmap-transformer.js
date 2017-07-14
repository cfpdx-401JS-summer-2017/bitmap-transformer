const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const invert = require('../lib/invert-transformer');

class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;

    }
    
    transform(fn) {
        const buffer = this.buffer;
        const header = this.header;
        const pixels = buffer.slice(header.pixelOffset);

        for(let i = pixels; i < header.fileSize; i += header.bitsPerPixel) {
            console.log({
                b: pixels.readInt8(i),
                g: pixels.readInt8(i+1),
                r: pixels.readInt8(i+2)
            });
            fn(buffer);
        }
    }
}

module.exports = BitmapTransformer;