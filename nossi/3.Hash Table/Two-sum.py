# https://leetcode.com/problems/two-sum/

# dictionary를 쓸 수 있는 상황을 판별하는 게 굉장히 중요하다
# 시간복잡도를 엄청 낮출 수 있는 그런 자료구조이기 때문에 언제 어떻게 사용하는지

nums = [4,1,9,7,5,3,16]
target = 14

def two_sum(nums, target):
    memo = {}
    for v in nums:
        needed_number = target - v
        if needed_number in memo:
            return True
        memo[v] = 1
    return False

print(two_sum(nums, target))


def two_sum2(nums, target):
    memo = {}
    for i, v in enumerate(nums):
        if target - v in memo:
            return [memo[target - v], i]
        memo[v] = i
    return False

print(two_sum2(nums, target))