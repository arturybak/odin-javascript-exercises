const palindromes = function (str) {
    const lowered = str.toLowerCase().replace(/[^a-z]/gi,'');
    const reversed = lowered.split('').reverse().join('');
    return lowered === reversed;
};

// Do not edit below this line
module.exports = palindromes;
