/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '').split('');
    let i = 0;
    let j = s.length - 1;
    while(i <= j){
        if(s[i] !== s[j]){
            return false
        }
        i++;
        j--;
    }
    return true
};

// CommonJS
module.exports = validPalindrome;

// ES Module
// export default validPalindrome;