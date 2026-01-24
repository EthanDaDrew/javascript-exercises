const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
	for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let product = 1;
	for (let i = 0; i < a.length; i++) {
    product *= a[i];
  }
  return product;
};

const power = function(base, exponent) {
  let product = 1;
	for (let i = 0; i < exponent; i++) {
    product *= base;
  }
  return product;
};

const factorial = function(a) {
	let factorial = 1;
  for (a; a > 1; a--) {
    factorial *= a;
  }
  return factorial;
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
