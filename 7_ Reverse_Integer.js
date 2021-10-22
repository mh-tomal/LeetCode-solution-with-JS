var reverse = function(x) {
    const absNumber = Math.abs(x).toString().split('').reverse().join('');
    if (absNumber > Math.pow(2,31)) return 0;
    return absNumber * Math.sign(x);
    
};
