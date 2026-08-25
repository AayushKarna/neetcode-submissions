class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        LCP = ''

        for index, char in enumerate(strs[0]):
            match = True
            for str in strs:
                lengthStr = len(str)
                if (index >= lengthStr or str[index] != char):
                    match = False
                    break
            
            if not match:
                break
            else:
                LCP = LCP + char
        
        return LCP
            
