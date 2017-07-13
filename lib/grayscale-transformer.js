const grayscale = (obj) => {
    const avg = Math.ceil((obj.r + obj.g + obj.b)/3);
    
     return {

    r: avg,
    g: avg,
    b: avg
        
    }

};
module.exports = grayscale;