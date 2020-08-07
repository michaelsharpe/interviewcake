const quicksort = require('../quicksort');

describe('quicksort', () => {
  it('sorts an small array', () => {
    const array = [1, 7, 2, 4, 5, 3, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(quicksort(array)).toEqual(expected);
  });

  it('sorts with duplicate numbers', () => {
    const array = [1, 7, 2, 4, 7, 5, 5, 3, 6];
    const expected = [1, 2, 3, 4, 5, 5, 6, 7, 7];
    expect(quicksort(array)).toEqual(expected);
  });
})