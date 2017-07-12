
const constants = require('../lib/bitmap-constants');

class BitmapHeader {

    constructor(buffer) {
        this.testBuf = buffer.readUInt32BE(0).toString(16);
    }

}

module.exports = BitmapHeader;