const removeFromArray = function(keep, ...remove) {
    return keep.filter(el => !remove.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
