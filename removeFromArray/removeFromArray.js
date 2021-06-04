const removeFromArray = function(goodArray) {
    let i, j;
    if(Array.isArray(goodArray) === false)
        goodArray = [goodArray];
  
    let badArray = new Array(arguments.length);
    for(i = 0; i < badArray.length; i++){
        badArray[i] = arguments[i];
    }
    
    console.log(badArray);
    let arrayLength = goodArray.length;
    let arrayLengthBad = badArray.length;

    for(i=0; i < arrayLength; i++){
        for(j=0; j<arrayLengthBad; j++){
            if(goodArray[i]===badArray[j]){
                goodArray.splice(i, 1);
                i--;
            }
        }
    }
    return goodArray;
};

module.exports = removeFromArray;
