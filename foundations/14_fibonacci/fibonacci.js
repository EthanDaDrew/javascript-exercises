const fibonacci = function(number) {
    let fibArray = [0, 1];
    if (number < 0) {
        return "OOPS";
    }

    for (let i = 0; i < number; i++) {
        let nextNum = fibArray[i] + fibArray[i + 1];
        fibArray.push(nextNum);
    }
    return fibArray[number]

    //it's late right now haha. definitely not the most space efficient solution
};

// Do not edit below this line
module.exports = fibonacci;
