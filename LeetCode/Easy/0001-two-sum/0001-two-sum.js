/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // hash table
    const memo = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(memo.has(target - nums[i])) {
            return [memo.get(target - nums[i]), i]
        }
        // 자기자신은 검사안하게끔 조건문을 지나서 set해주는 거임
        memo.set(nums[i], i)
    }
};

function bruteForce() {
    //  완전탐색
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
function twoPoniter() {
    // two pointer
    let l = 0
    let r = nums.length - 1
    let sorted = [...nums].sort((a,b) => a-b)
    while(l < r) {
        if(sorted[l] + sorted[r] === target) {
            return [nums.indexOf(sorted[l]), nums.lastIndexOf(sorted[r])]
        } else if (sorted[l] + sorted[r] > target) {
            r--
        } else {
            l++
        }
    }
}