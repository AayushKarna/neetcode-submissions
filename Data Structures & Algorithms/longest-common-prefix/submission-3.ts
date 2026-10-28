class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let lcp = '';

        const sample = strs[0];

        for (let i = 0; i < sample.length; i++) {
            for (const str of strs) {
                if (str[i] !== sample[i] || i == str.length) {
                    return lcp;
                }
            }

            lcp += sample[i];
        }

        return lcp;
    }
}
