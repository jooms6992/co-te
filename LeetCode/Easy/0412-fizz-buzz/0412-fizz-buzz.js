/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for(let i = 1; i <= n; i++) {
        const divisibleBy3 = (i % 3 === 0)
        const divisibleBy5 = (i % 5 === 0)

        let currStr = ''

        if(divisibleBy3) {
            currStr += 'Fizz'
        }
        if(divisibleBy5) {
            currStr += 'Buzz'
        } 
        if(!currStr) {
            currStr += i
        }
        result.push(currStr)
    }
    return result;
};