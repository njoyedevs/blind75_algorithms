/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentElements = function(nums, k) {
    const kNums = {}
    nums.forEach( n => {
        if (kNums[n] === undefined){
            kNums[n] = 0;
        }
        kNums[n]++
    })
    return Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1).slice(0,k).map(e=>e[0])
};

// CommonJS
module.exports = topKFrequentElements;

// ES Module
// export default topKFrequentElements;
