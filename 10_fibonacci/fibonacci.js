const fibonacci = function (numberInSeries) {
    let recentNumberOne = 0
    let recentNumberTwo = 0
    let fibonacciNumber

    //due to start of the fib series, decrement by 1 to get correct results
    numberInSeries = +numberInSeries
    if (numberInSeries < 0)
        return "OOPS"

    for (let i = 0; i <= numberInSeries; i++) {
        if (i === 1)
            fibonacciNumber = 1
        else
            fibonacciNumber = recentNumberOne + recentNumberTwo;
        recentNumberOne = recentNumberTwo
        recentNumberTwo = fibonacciNumber
    }
    return fibonacciNumber
};

// Do not edit below this line
module.exports = fibonacci;
