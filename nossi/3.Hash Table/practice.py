nums = [9,1,4,7,3,-1,0,5,8,-1,6]

def longestConsecutive(nums) -> int:
    if len(nums) == 0: return 0
    memo = {}
    result = 0
    max = 0
    for v in nums:
        memo[v] = True
    for v in nums:
        current = v
        while current + 1 in memo:
            current = current + 1
            result += 1
            if max < result:
                max = result
        result = 0
    return max + 1
    
print(longestConsecutive(nums))