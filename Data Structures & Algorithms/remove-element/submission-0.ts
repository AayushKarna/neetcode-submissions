class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let lastIndex = nums.length - 1;
        for (let i = 0; i <= lastIndex; i++) {
            if (nums[i] === val) {
                nums[i] = nums[lastIndex];
                nums[lastIndex] = Infinity;

                i--;
                lastIndex--;
            }
        }

        return lastIndex + 1;
    }
}
