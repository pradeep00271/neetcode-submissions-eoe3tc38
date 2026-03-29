class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
            
                for (const [i, num] of nums.entries()) {
                        const complement = target - num
                                
                                        if (map.has(complement)) {
                                                    return [map.get(complement), i]
                                                            }
                                                                    
                                                                            map.set(num, i)
                                                                                }
                                                                                    
                                                                                        return []
    }
}
