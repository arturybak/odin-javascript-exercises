const sumAll = function (start, end) {
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }

    let res = 0;

    if (start > end) [start, end] = [end, start];

    for (start; start <= end; start++) {
        res += start;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
