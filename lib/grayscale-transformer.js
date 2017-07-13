
function grayscale(rgb) {
    var avg = Math.round((rgb.r + rgb.g + rgb.b) / 3);
    Object.keys(rgb).forEach(function(key) {rgb[key] = avg});
    return rgb;
}

module.exports = grayscale;