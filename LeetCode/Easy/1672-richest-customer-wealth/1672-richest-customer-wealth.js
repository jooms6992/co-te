/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((a,b) => a+b)))
    let max = 0;
    // 1. 합을 구한다
    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
    // 2. 합의 최대값을 구한다
            sum += accounts[i][j]
            max = Math.max(sum, max)
        }
    }
    // 3. 최대값 리턴
    return max
};