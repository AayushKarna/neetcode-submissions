class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const majorityThreshold = Math.floor(nums.length / 2);

        const countMap = new Map();

        for (const num of nums) {
            const newNumCount = (countMap.get(num) ?? 0) + 1;

            if (newNumCount > majorityThreshold) {
                return num;
            } else {
                countMap.set(num, newNumCount);
            }
        }
    }
}
