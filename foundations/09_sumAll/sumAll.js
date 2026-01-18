const sumAll = function(num1, num2) {
    returnNum = 0;
    if (num2 === num1) {
        return num1;
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            returnNum += i;
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            returnNum += i;
        }
    }
    return returnNum;
};

// Do not edit below this line
module.exports = sumAll;
