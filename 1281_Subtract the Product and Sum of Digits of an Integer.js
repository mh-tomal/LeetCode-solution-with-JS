var subtractProductAndSum = function(n) {
    const str = n.toString()
    let product = 1
    let sum = 0
    
    for(const item of str) {
        product *= Number(item)
        sum += Number(item)
    }
    
    return product - sum
};