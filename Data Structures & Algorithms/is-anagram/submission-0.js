class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let ch of t) {
    count[ch] = (count[ch] || 0) - 1;
  }

  for (let val of Object.values(count)) {
    if (val !== 0) return false;
  }

  return true;
    }
}
