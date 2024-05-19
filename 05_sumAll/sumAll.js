const sumAll = function(rangeStart, rangeEnd) {
    if ( (typeof(rangeStart) != "number" || typeof(rangeEnd) != "number") || ((rangeStart < 0 || rangeEnd < 0))){
        return 'ERROR';
    } else {
        if (rangeStart > rangeEnd) {
            let temp = rangeStart;
            rangeStart = rangeEnd;
            rangeEnd = temp;
        }
    }

    let result = 0;

    for (let i = rangeStart; i <= rangeEnd; i++){
        result += i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
