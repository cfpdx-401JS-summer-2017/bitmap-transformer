const assert = require('assert');
const fs = require('fs');
const BitmapHeader = require('../lib/bitmap-header');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');

describe('bitmap file transformer', () => {
    let buffer = null;
    before(() => {
        const header = new BitmapHeader();
        const path = './tests/test-bitmap.bmp';
        buffer = header.createBuf(path);
    });

    // "pinning" test, or "snapshot" test
    it('test whole transform', () => {
        const bitmap = new BitmapTransformer(buffer);

        // bitmap.transform(invert);
        // const inverted = bitmap.buffer;
        // console.log(inverted);

        bitmap.transform(grayscale);
        console.log('bg: ', grayscale);
        const grayscaled = bitmap.buffer;
        console.log('g: ',grayscaled);

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
