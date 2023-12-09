const reverseString = function(str) {
    let newStr = '';
    for(char of str){
        newStr = char + newStr;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
