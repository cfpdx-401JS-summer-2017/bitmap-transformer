const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {

    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        const buffer = this.buffer;
        const header = this.header;

        const pixels = buffer.slice(header.pixelOffset);

        for(let i = pixels; i < header.fileSize; i += header.bitsPerPixel) {
            fn(buffer);
        }
    }

}

module.exports = BitmapTransformer;