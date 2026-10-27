class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = new Map();

        for (const [i, num] of nums.entries()) {
            const complement = target - num;

            if (hash.has(complement)) return [hash.get(complement), i];

            hash.set(num, i);
        }
    }
}
