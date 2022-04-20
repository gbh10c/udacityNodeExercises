import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

describe("Jasmine test examples", () => {
  it("should not contain 5", () => {
    expect(arrays.cut3(mixArr)).not.toContain(5);
  });
  
  it("should equal 19", () => {
    expect(numbers.sum(arrSum, myNum)).toEqual(19);
  });
  
  it("should be close to 19", () => {
    expect(numbers.sum(arrSum, myNum)).toBeCloseTo(19, 0);
  });
  
  it("should capitalize words in a string", () => {
    expect(strings.capitalize('the quick brown fox')).toBe('The Quick Brown Fox');
  });
  
  it("should be greater than 39", () => {
    expect(numbers.multiply(five, 8)).toBeGreaterThan(39);
  });
  
  it("should be a non-zero value", () => {
    expect(arrays.lgNum(mixArr)).toBeTruthy();
  });
  
  it("should be less than or equal to 6", () => {
    expect(arrays.lgNum(mixArr)).toBeLessThanOrEqual(6);
  });

})
