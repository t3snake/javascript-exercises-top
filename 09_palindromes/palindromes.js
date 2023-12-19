const palindromes = function (pstring) {
    let array = Array.from(pstring);
    let punc = [" ", ",", "!", "."];
    let filteredArray = array.filter( (item) => !punc.find(i => i === item) );
    console.log(filteredArray);
    return filteredArray.slice().reverse().every( (value, index) => value.toUpperCase() === filteredArray[index].toUpperCase());
};

// Do not edit below this line
module.exports = palindromes;
