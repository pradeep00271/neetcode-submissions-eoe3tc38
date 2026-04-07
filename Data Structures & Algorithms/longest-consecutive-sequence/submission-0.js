class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let currentStreak = 1;

            while (numSet.has(n + 1)) {
                n++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
    }
}
