function grayscale(rgbObj){
    let obj = rgbObj;
    const grayaverage = (obj.r+obj.g+obj.b)/3;

    rgbObj.r = grayaverage;
    rgbObj.g = grayaverage;
    rgbObj.b = grayaverage;

    return rgbObj;
}

module.exports = grayscale;