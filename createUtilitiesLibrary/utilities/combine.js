// Add numbers in an array

exports.sum = (arr) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Concatenate two arrays

exports.concat = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
