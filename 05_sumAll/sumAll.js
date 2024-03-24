const sumAll = function(firstNumber = 0, lastNumber = 0) {
    let sumAll = 0
    if (typeof(firstNumber) != "number" || typeof(lastNumber) != "number") {
        return "ERROR"
    }
    else if (firstNumber < 0 || lastNumber < 0) {
        return "ERROR"
    } 
    else {
            for (let i = Math.min(firstNumber,lastNumber); i <= Math.max(firstNumber,lastNumber); i++) {
            sumAll += i
        }
    }
    return sumAll
};

// Do not edit below this line
module.exports = sumAll;
