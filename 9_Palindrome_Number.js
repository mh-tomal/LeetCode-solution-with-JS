/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    const rev = `${x}`.split('').reverse().join('');
    return x == rev;
};