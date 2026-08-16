class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False
        
        setS = set(s)

        # check for each character the number of occurance
        for char in setS:
            charCountS = s.count(char)
            charCountT = t.count(char)

            if (charCountS != charCountT):
                return False
        return True

