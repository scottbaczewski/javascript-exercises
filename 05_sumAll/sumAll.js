const sumAll = function(first, second) {
    let smallest = Math.min(first, second);
    let biggest = Math.max(first, second);
    let sum = 0;
    if (first < 0 || !Number.isInteger(first) ||
        second < 0 || !Number.isInteger(second)) {
            return 'ERROR'; }
    for (let i = smallest; i <= biggest; ++i) {
        sum += i;   
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
