/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let memo = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in memo) {
            return true
        }
        memo[nums[i]] = true 
    }
  return false;
  const set = new Set(nums)
    return set.size !== nums.length
};