function gsTransformer( color ) {
  return grayscaled = {
    b: ( color.b + color.g + color.r ) / 3,
    g: ( color.b + color.g + color.r ) / 3,
    r: ( color.b + color.g + color.r ) / 3
  };
}
module.exports = gsTransformer;
