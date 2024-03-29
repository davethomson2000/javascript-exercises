const add = function(a = 0, b = 0) {
	return(a + b)
};

const subtract = function(a, b) {
  return(a - b)
};

const sum = function(nums = []) {
  return nums.reduce((total, i) => total + i, 0)
};

const multiply = function(nums = []) {
  return nums.reduce((total, i) => total * i, 1)
};

const power = function(a, b) {
  return (a ** b)
};

const factorial = function(a) {
  let factorial = 1
  for (let i = 1; i <= a; i++) {
    factorial *= i
  }
  return factorial
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
