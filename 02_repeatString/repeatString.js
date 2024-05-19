const repeatString = function(stringToRepeat, times) {
    let repeatedString = '';

    if (times < 0 || parseInt(times) === 'NaN') {
        return 'ERROR';
    } else if (times === 0 || stringToRepeat === '') {
        return '';
    }

    for (let i = 0; i < times; i++) {
        repeatedString += stringToRepeat;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
