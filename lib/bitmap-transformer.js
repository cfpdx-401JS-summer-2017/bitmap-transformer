const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const invert = require('../lib/invert-transformer');

class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;

        this.transform = function (fn) {
            const buffer = this.buffer;
            const header = this.header;

            console.log('header.pixelOffset = ' + header.pixelOffset);
            console.log('header.fileSize = ' + header.fileSize);
            console.log('header.bitsPerPixel = ' + header.bitsPerPixel);

            for (var i = header.pixelOffset; i < header.fileSize; i += header.bitsPerPixel) {
                //fn(buffer);
            }
        };
    }
}

module.exports = BitmapTransformer;