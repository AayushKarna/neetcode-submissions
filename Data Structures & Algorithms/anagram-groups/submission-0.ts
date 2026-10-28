class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map();

        for (const str of strs) {
            const strSignature = [...str].sort().join('');

            if (hashMap.has(strSignature)) {
                hashMap.get(strSignature).push(str);
            } else {
                hashMap.set(strSignature, [str]);
            }
        }

        return [...hashMap.values()];
    }
}
