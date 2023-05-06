/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sets = new Map();
    for (const str of strs) {
        const sorted = [...str].sort().join('');
        if (sets.has(sorted)) {
            sets.get(sorted).push(str);
        } else {
            sets.set(sorted, [str]);
        }
    }
    return Array.from(sets.values());
};

// CommonJS
module.exports = groupAnagrams;

// ES Module
// export default groupAnagrams;