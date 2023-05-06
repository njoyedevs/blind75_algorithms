/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveSequence = function(nums) {
    if (!nums.length) {
        return 0;
    }
    nums = nums.sort((a, b) => a - b);
    let counter = 1;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] - nums[i - 1] === 1) {
            counter++;
        } else if (nums[i] - nums[i - 1] !== 1) {
            counter = 1;
        }
        max = Math.max(max, counter);
    }
    return max;
};

// CommonJS
module.exports = longestConsecutiveSequence;

// ES Module
// export default longestConsecutiveSequence;