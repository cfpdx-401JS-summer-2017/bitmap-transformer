const fs = require('fs');

const bitmapUtilities = {
  createBuffer(path) {
    buffer = fs.readFileSync(path);
    return buffer;
  }
}
module.exports = bitmapUtilities;
