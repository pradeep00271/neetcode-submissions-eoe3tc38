class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (let word of strs) {
        const count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 97]++
        }

        const key = count.join("#")

        if (!map.has(key)) {
            map.set(key, [word]);
        } else {
            map.get(key).push(word);
        }
    }

    return Array.from(map.values());
    }
}
