const isFirstComeFirstServed = require('../firstComeFirstServed');

describe('firstComeFirstServed', () => {
  it('both registers have same number of orders', () => {
    let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
    expect(actual).toBe(true);

  })

  it('registers have different lengths', () => {
    let actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
    expect(actual).toBe(false);

  })

  it('one register is empty', () => {
    let actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
    expect(actual).toBe(true);

  })

  it('served orders is missing orders', () => {
    let actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
    expect(actual).toBe(false);

  })

  it('served orders has extra orders', () => {
    let actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
    expect(actual).toBe(false);

  })

  it('one register has extra orders', () => {
    let actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
    expect(actual).toBe(false);

  })

  it('one register has unserved orders', () => {
    let actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
    expect(actual).toBe(false);

  })

  it('order numbers are not sequential', () => {
    let actual = isFirstComeFirstServed([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18]);
    expect(actual).toBe(true);

  })
})