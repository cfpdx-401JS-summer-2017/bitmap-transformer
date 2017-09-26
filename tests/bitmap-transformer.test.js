const assert = require('assert');
const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const getBitmap = require('./before-tests');

describe('bitmap file transformer', () => {
    
    let buffer = null;
    before(() => {
        // DONE: read './test/test-bitmap.bmp' into buffer variable

        // DONE: the functionality in this before is same as 
        // other test, can you remove (extract) the duplication?
        buffer = getBitmap();
    });

    // "pinning" test, or "snapshot" test
    it.skip('test whole transform', () => {
        // use the BitmapTransformer class, 
        // passing in the buffer from the file read
        const bitmap = new BitmapTransformer(buffer);

        // call .transform(), which will modify the buffer.
        // in this api, you pass in a transformation function
        bitmap.transform(invert);

        // after above step, the buffer has been modified
        // and is accessible via bitmap.buffer

        // read the output file we saved earlier as
        // the "standard" expected output file
        const testBuffer = fs.readFileSync('./tests/inverted-expected.bmp');
        assert.deepEqual(bitmap.buffer, testBuffer);

        // if you don't have a standard file yet, you could write it 
        // out by commenting above code, using code below and visually inspect
        // the file for correctness.
        // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
    });
});
