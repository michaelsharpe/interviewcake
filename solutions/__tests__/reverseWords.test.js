const reverseWords = require('../reverseWords');

describe('reverseWords', () => {
  it('one word', () => {
    const input = 'vault'.split('');
    reverseWords(input);
    let actual = input.join('');
    let expected = 'vault';

    expect(actual).toEqual(expected);
  })

  it('two words', () => {
    let input = 'thief cake'.split('');
    reverseWords(input);
    let actual = input.join('');
    let expected = 'cake thief';

    expect(actual).toEqual(expected);
  });

  it('three words', () => {
    let input = 'one another get'.split('');
    reverseWords(input);
    let actual = input.join('');
    let expected = 'get another one';
    expect(actual).toEqual(expected);
  });

  it('multiple words of the same length', () => {
    let input = 'rat the ate cat the'.split('');
    reverseWords(input);
    let actual = input.join('');
    let expected = 'the cat ate the rat';
    expect(actual).toEqual(expected);
  })

  it('multiple words of different length', () => {
    let input = 'yummy is cake bundt chocolate'.split('');
    reverseWords(input);
    let actual = input.join('');
    let expected = 'chocolate bundt cake is yummy';
    expect(actual).toEqual(expected);
  })

  it('empty string', () => {
    input = ''.split('');
    reverseWords(input);
    actual = input.join('');
    expected = '';
    expect(actual).toEqual(expected);
  })
})