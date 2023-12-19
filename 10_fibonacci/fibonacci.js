const fibonacci = function(n1) {
    let n = parseInt(n1);
    let prev = 1;
    let next = 1;
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    for (let i=3; i<=(n); i++) {
        let tmp = next;
        next = next + prev;
        prev = tmp;
        if (i ===  n) {
            return next;
        }

    }
};

// Do not edit below this line
module.exports = fibonacci;
