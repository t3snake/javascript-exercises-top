const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	const summ = arr.reduce((sum, item) => sum + item, 0);
  return summ;
};

const multiply = function(arr) {
  const product = arr.reduce( (product, item) => product*item, 1);
  return product;
};

const power = function(a, b) {
  let ans = 1;
	for (let i=0; i<b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
