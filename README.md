# LeetCode Algorithms

A collection of LeetCode algorithm solutions in JavaScript.

## Installation

First, install your package using npm:
```bash
npm install blind75_algorithms
```

## Importing Into .js File

In JavaScript file, import the function using either CommonJS or ES Module syntax, depending on project setup:
```js
// Using CommonJS
const { containsDuplicates } = require('blind75_algorithms');

// Using ES Modules
import { containsDuplicates } from 'blind75_algorithms';
```

## Example Usage

Then, use the specific function:
```js
// Using CommonJS
const { containsDuplicates } = require('blind75_algorithms');

// Using ES Modules
// import { containsDuplicate } from 'blind75_algorithms';

// Test cases
const nums1 = [1, 2, 3, 1]; // Duplicates in array => true
const nums2 = []; // Empty array => false
const nums3 = [1, 2, 3]; // No duplicates in array => false

console.log(containsDuplicates(nums1)); // Output: true
console.log(containsDuplicates(nums2)); // Output: false
console.log(containsDuplicates(nums3)); // Output: false
```

This example demonstrates how users of this package can easily import and use the containsDuplicate function from this blind75_algorithms package in their own projects.

## Algorithms

This package includes the following algorithms:

* containsDuplicates
* groupAnagrams
* isAnagram
* longestConsecutiveSequence
* productExceptSelf
* topKFrequentElements
* twoSum
* validPalindrome
