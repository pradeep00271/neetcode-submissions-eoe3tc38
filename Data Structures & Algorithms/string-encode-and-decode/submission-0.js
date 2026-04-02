class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
            for (let str of strs) {
                    result += str.length + "#" + str;
                        }
                            return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
            let i = 0;
                while (i < str.length) {
                        let j = str.indexOf("#", i);
                                let length = parseInt(str.slice(i, j));
                                        let word = str.slice(j + 1, j + 1 + length);
                                                i = j + 1 + length;
                                                        result.push(word);
                                                            }
                                                                return result;
    }
}
