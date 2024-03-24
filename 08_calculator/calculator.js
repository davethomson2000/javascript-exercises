const add = function(a = 0, b = 0) {
	return(a + b)
};

const subtract = function(a, b) {
  return(a - b)
};

const sum = function(nums = []) {
	let sum = 0
  for (const num of nums) {
    sum += num
  }
  return sum
};

const multiply = function(nums = []) {
  let sum = 1
  for (const num of nums) {
    sum *= num
  }
  return sum
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
