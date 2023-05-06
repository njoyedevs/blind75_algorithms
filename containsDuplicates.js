/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let n of nums){
        if(set.has(n)){
            return true
        }
        set.add(n)
        console.log(set)
    }
    return false
};

// CommonJS
module.exports = containsDuplicate;

// ES Module
// export default containsDuplicate;