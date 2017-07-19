const fs = require('fs');

function newBuffer(path) {
    return new Buffer(fs.readFileSync(path));
}

module.exports = newBuffer;