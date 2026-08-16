class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lengthNums = len(nums)
        for i in range(lengthNums - 1):
            for j in range(i + 1, lengthNums):
                if (nums[i] + nums[j] == target):
                    return [i, j]