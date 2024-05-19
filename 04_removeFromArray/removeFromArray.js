const removeFromArray = function(originalArray, ...elements) {

    for (let i = 0; i < originalArray.length; i++) {
        for (const element of elements){
            if (originalArray[i] === element){
                originalArray.splice(i,1);
                i--;
            }
        }
    }

    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
