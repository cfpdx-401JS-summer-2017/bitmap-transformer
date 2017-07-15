function gsTransformer(color) {

    return grayscaled = {
      b: 255 - color.b,
      g: 255 - color.g,
      r: 255 - color.r
    };

    }

module.exports = gsTransformer;
