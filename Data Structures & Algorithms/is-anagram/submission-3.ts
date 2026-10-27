class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sCharsCount = new Map();
        const tCharsCount = new Map();

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            const tChar = t[i];

            if (sCharsCount.has(sChar)) {
                sCharsCount.set(sChar, sCharsCount.get(sChar) + 1);
            } else {
                sCharsCount.set(sChar, 1);
            }

            if (tCharsCount.has(tChar)) {
                tCharsCount.set(tChar, tCharsCount.get(tChar) + 1);
            } else {
                tCharsCount.set(tChar, 1);
            }
        }

        for (const [char, count] of sCharsCount) {
            if (tCharsCount.get(char) !== count) {
                return false;
            }
        }

        return true;
    }
}
