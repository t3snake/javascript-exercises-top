const sumAll = function(start, end) {
    if(start<0 || end<0) return 'ERROR';
    if(isNaN(start) || isNaN(end) || typeof start === "string" || typeof end === "string") return 'ERROR';
    if(start>end){
        let tmp = start;
        start = end;
        end = tmp;
    }

    sum = 0;
    for(i=start; i<=end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
