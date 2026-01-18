const removeFromArray = function (array, ...valuesToRemove) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < valuesToRemove.length; j++) {
            if (array[i] === valuesToRemove[j]) {
                array.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return array;
  // array → [1, 2, 3, 4]
  // valuesToRemove → [3, 1]
}

// Do not edit below this line
module.exports = removeFromArray;
