
// You should implement your task here.

module.exports = function towelSort(array) {
    if (typeof array === undefined || !array || array.length === 0) return [];
    let result = [];
    for (let n = 0; n < array.length; n++) {
        console.log('array [', n, '] is: ', array[n]);
        if (n % 2) {
            result = result.concat(array[n].reverse())
        } else {
            result = result.concat(array[n]);
        }
    }
    return result;
}








