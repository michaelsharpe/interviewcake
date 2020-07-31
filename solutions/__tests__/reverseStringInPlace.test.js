const reverse = require('../reverseStringInPlace');

describe('reverseStringInPlace', () => {
  it('empty string', () => {
    let input = ''.split('');
    reverse(input);
    let actual = input.join('');
    let expected = '';
    expect(actual).toEqual(expected);
  })

  it('single character string', () => {
    let input = 'A'.split('');
    reverse(input);
    let actual = input.join('');
    let expected = 'A';
    expect(actual).toEqual(expected);
  })

  it('longer string', () => {
    let input = 'ABCDE'.split('');
    reverse(input);
    let actual = input.join('');
    let expected = 'EDCBA';
    expect(actual).toEqual(expected);
  })
})