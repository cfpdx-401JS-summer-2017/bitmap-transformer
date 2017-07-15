const constants = require( '../lib/bitmap-constants' );

class BitmapTransformer {
  constructor( buffer ) {
    this.buffer = buffer;
  }

  changeColor( fn ) {
    const offset = this.buffer[ constants.PIXEL_OFFSET ];
    const pixels = this.buffer.slice( offset );
    for ( var i = 0; i < pixels.length; i = i + 3 ) {
      const color = {
        b: pixels.readInt8( i ),
        g: pixels.readInt8( i + 2 ),
        r: pixels.readInt8( i + 3 )
      }
      const { b, g, r } = fn( color )
      pixels.writeInt8( i, b ),
        pixels.writeInt8( i + 1, g ),
        pixels.writeInt8( i + 2, r )
    }
  }
}
module.exports = BitmapTransformer;
