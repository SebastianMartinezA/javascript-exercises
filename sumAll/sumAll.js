const sumAll = function(num1, num2) {
    let sum = 0, aux;

    if(typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0)
        return "ERROR";
    
    if(num1>num2){
        aux = num1;
        num1 = num2;
        num2 = aux;
    }
    
    for(let i = num1; i < num2+1; i++){
        sum+=i;
    }
    return sum;
};

module.exports = sumAll;
