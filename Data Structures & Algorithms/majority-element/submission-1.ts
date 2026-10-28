class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // Boyer–Moore majority vote algorithm
        // https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

        let m = 0;
        let counter = 0;

        for (const num of nums) {
            if (counter !== 0 && m === num) {
                counter++;
            } else if (counter === 0) {
                counter++;
                m = num;
            } else if (counter !== 0 && m !== num) {
                counter--;
            }
        }

        return m;
    }
}
