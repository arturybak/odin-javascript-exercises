const repeatString = function(phrase, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let res = '';
    while (num) {
        res += phrase;
        num--;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
