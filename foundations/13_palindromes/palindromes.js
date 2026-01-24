const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    let newString = string.toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    let leftIndex = 0;
    let rightIndex = newString.length - 1;
    while (leftIndex < rightIndex) {
        if (newString.charAt(rightIndex) != newString.charAt(leftIndex)) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
