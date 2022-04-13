const { sum, concat } = require('./utilities/combine.js');
const { lgNum, cut3 } = require('./utilities/identify.js');

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(`Sum of numbers in an arry: ${sum(arr1)}`);
console.log(`Concatenate two arrays: ${concat(arr1, arr2)}`);
console.log(`Largest number in an array: ${lgNum(arr2)}`);
console.log(`Remove third number from an array: ${cut3(arr1)}`);

