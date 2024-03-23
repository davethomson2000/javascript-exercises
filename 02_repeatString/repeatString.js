const repeatString = function (phrase, times) {
    let repeatedString = ""
    if (times >= 0) {
        for (let i = 0; i < times; i++) {
            repeatedString += phrase
        }
    } else {
        repeatedString = "ERROR"
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
