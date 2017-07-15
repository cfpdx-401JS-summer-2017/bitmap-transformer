const fs = require( 'fs' );
const assert = require( 'assert' );
const invTransformer = require( '../lib/invert-transformer' );
const gsTransformer = require( '../lib/grayscale-transformer' );
const BitmapTransformer = require( '../lib/bitmap-transformer' );
const bitmapUtilities = require( '../tests/bitmapUtilities' );

// 8 bits in a byte
describe( 'bitmap file transformer', () => {
  let buffer = null;
  before( () => {
    const path = './tests/test-bitmap.bmp';
    buffer = bitmapUtilities.createBuffer( path );
  } );
  // "pinning" test, or "snapshot" test
  it( 'test whole transform', () => {
    const bitmap = new BitmapTransformer( buffer );
    bitmap.changeColor( invTransformer );

    // console.log('grayscaled: ',grayscaled);
    // const testBuffer = fs.readFileSync('./tests/my-inverted-expected.bmp');

    // after above step, the buffer has been modified
    // and is accessible via bitmap.buffer

    // read the output file we saved earlier as
    // the "standard" expected output file
    const testBuffer = fs.readFileSync( './tests/inverted-expected.bmp' );
    assert.deepEqual( bitmap.buffer, testBuffer );

    // if you don't have a standard file yet, you could write it
    // out by commenting above code, using code below and visually inspect
    // the file for correctness.
    // return fs.writeFileSync( './tests/test-inverted-expected.bmp', bitmap.buffer );
  } );
} );
