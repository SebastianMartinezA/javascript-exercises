const palindromes = function (daString) {
    return(daString.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().replace(/\s/g,'') === 
    daString.split("").reverse().join("").replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().replace(/\s/g,''));
}

module.exports = palindromes;
