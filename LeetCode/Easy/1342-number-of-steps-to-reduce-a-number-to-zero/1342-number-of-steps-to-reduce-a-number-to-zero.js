/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    let current = num
    while(current) {
        if(current % 2 === 0) {
            current = current / 2
        } else {
            current = current - 1
        }
        steps++
    }
    return steps
};