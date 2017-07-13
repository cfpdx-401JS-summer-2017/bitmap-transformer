const fs = require('fs');
const assert = require('assert');
const BitmapTransformer = require('../lib/bitmap-transformer');
const bitmapUtilities = require('../tests/bitmapUtilities');

// 8 bits in a byte
describe('bitmap file transformer', () => {
    let buffer = null;
    before(() => {
      const path = './tests/test-bitmap.bmp';
      buffer = bitmapUtilities.createBuffer(path);
    });
    // "pinning" test, or "snapshot" test
    it('test whole transform', () => {
      const type = 'invert';
      const bitmap = new BitmapTransformer(buffer);
      bitmap.sendType(type);
        // const inverted = bitmap.buffer;
        // // console.log('inverted: ',inverted);
        //
        // bitmap.change(grayscale);
        // const grayscaled = bitmap.buffer;
        // console.log('grayscaled: ',grayscaled);

        // after above step, the buffer has been modified
        // and is accessible via bitmap.buffer

        // read the output file we saved earlier as
        // the "standard" expected output file
        // const testBuffer = fs.readFileSync('./tests/inverted-expected.bmp');
        // assert.deepEqual(bitmap.buffer, testBuffer);

        // if you don't have a standard file yet, you could write it
        // out by commenting above code, using code below and visually inspect
        // the file for correctness.
        // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
    });
});
