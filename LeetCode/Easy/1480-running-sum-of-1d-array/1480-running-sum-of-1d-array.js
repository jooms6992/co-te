/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
    let sum = 0;
    const result = []
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        result.push(sum)
    }
    return result
};