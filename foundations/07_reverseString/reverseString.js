const reverseString = function(string) {
    let returnString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        returnString += string.charAt(i);
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
