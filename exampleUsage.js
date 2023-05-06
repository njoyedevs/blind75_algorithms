// CommonJS
const { containsDuplicate, twoSum, maxSubArray } = require('blind75_algorithms');

// ES Module
// import { containsDuplicate, twoSum, maxSubArray } from 'your-package-name';

// Test cases
const nums1 = [1, 2, 3, 1]; // Duplicates in array => true
const nums2 = []; // Empty array => false
const nums3 = [1, 2, 3]; // No duplicates in array => false

console.log(containsDuplicate(nums1)); // Output: true
console.log(containsDuplicate(nums2)); // Output: false
console.log(containsDuplicate(nums3)); // Output: false