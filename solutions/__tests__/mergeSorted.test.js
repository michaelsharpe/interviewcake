const mergeArrays = require('../mergeSorted');

it('both arrays are empty', () => {
  actual = mergeArrays([], []);
  expected = [];
  expect(actual).toEqual(expected)
})

it('first array is empty', () => {
  actual = mergeArrays([], [1, 2, 3]);
  expected = [1, 2, 3];
  expect(actual).toEqual(expected)
})

it('second array is empty', () => {
  actual = mergeArrays([5, 6, 7], []);
  expected = [5, 6, 7];
  expect(actual).toEqual(expected)
})

it('both arrays have some numbers', () => {
  actual = mergeArrays([2, 4, 6], [1, 3, 7]);
  expected = [1, 2, 3, 4, 6, 7];
  expect(actual).toEqual(expected)
})

it('arrays are different lengths', () => {
  actual = mergeArrays([2, 4, 6, 8], [1, 7]);
  expected = [1, 2, 4, 6, 7, 8];
  expect(actual).toEqual(expected)
})