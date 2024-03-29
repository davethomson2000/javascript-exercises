const palindromes = function (word = "") {
    word = word.replace(/[^\w]/g,"").toLowerCase()
    if (word.split("").reverse().join("") === word)
        return true
    else 
        return false
};

// Do not edit below this line
module.exports = palindromes;
