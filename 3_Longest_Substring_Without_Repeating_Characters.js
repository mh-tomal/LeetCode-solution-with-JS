/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const map = {};
    let currStart = 0,
        max = 0;
    for(let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (map.hasOwnProperty(letter) && map[letter] >= currStart) {
            currStart = map[letter] + 1;
        }
        map[letter] = i;
        max = Math.max(i - currStart + 1, max);
    }
    return(max);
    
};