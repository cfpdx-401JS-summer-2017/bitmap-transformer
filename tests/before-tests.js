const fs = require('fs');

const getBitmap = () => fs.readFileSync('./tests/test-bitmap.bmp');

module.exports = getBitmap;