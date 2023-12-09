const repeatString = function(str, timesToRepeat) {
    if (timesToRepeat < 0){
        return 'ERROR';
    }
    let newStr = "";
    for(i=0; i<timesToRepeat; i++){
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
