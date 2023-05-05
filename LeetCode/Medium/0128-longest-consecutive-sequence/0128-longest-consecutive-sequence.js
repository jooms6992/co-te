/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let longest = 0
    const memo = new Set(nums)
    for(let i = 0; i < nums.length; i++) {
        if(!memo.has(nums[i] - 1)) {
            let cnt = 1;
            let target = nums[i] + 1
            while(memo.has(target)) {
                cnt++
                target++
            }
            longest = Math.max(cnt, longest)
        }
    }
    return longest
};