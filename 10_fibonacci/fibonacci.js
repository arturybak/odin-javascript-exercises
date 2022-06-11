const fibonacci = count => {
    if (count < 0) return 'OOPS';
    if (count === 0) return 0;

    let a = 0, b = 1;

    for (let i = 1; i < count; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
