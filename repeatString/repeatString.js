const repeatString = function(string, num) {
    if(num<0) return "ERROR";
    let returnedString = "";
    for(i=0; i<num; i++){
        returnedString += string;
    }
    return returnedString;
    
};

module.exports = repeatString;
