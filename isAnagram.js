/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const freqS = new Array(26).fill(0);
    const freqT = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freqT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    return freqS.every((count, index) => count === freqT[index]);
};

// CommonJS
module.exports = isAnagram;

// ES Module
// export default isAnagram;