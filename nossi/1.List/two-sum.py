# https://leetcode.com/problems/two-sum/
nums = [3,3]
target = 6


# 완전 탐색 O(n^2)
def twoSum(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i+1, n):
            if(nums[i] + nums[j] == target):
                return [i,j]
    return False

print(twoSum(nums, target))


# two pointer
# 정렬은 O(nlogn)
def twoSumm(nums, target):
    sorted = nums[:]
    sorted.sort()
    l = 0
    r = len(sorted) - 1
    while l != r:
        if(sorted[l] + sorted[r] == target):
            return [nums.index(sorted[l]), nums.index(sorted[r], -1)]
        elif(sorted[l] + sorted[r] > target):
            r = r - 1
        else:
            l = l + 1
    return False

print(twoSumm(nums, target))