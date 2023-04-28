# https://leetcode.com/problems/longest-consecutive-sequence/
nums = [9,1,4,7,3,-1,0,5,8,-1,6]

def longestConsecutive(nums):
    if len(nums) == 0: return 0
    longest = 0
    num_dict = {}
    # for num in nums:
    #     num_dict[num] = True
    # 딕셔너리 대신 해쉬셋을 이용해 간단히 구현가능
    # value만 없지 딕셔너리와 작동원리는 같다 O(1)
    num_dict = set(nums)
    for num in num_dict:
        # 항상 n번 반복이 아닌 특정 조건에만 n번 반복하는 건 O(1)이다.
        # 시작점만 while문을 돈다는 조건을 걸어 시간복잡도를 한 단계 낮춘다
        if num - 1 not in num_dict:
            cnt = 1
            target = num + 1
            while target in num_dict:
                target += 1
                cnt += 1
            longest = max(longest, cnt)
    return longest

print(longestConsecutive(nums))
