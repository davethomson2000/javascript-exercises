const palindromes = function (word = "") {
    word = word.replace(/[^\w]/g,"").toLowerCase()
    console.log(word)
    if (word.split("").reverse().join("") === word)
        return true
    else 
        return false
};
palindromes("racecar!")
// Do not edit below this line
module.exports = palindromes;
