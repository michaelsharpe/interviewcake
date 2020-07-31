function reverse(arrayOfChars) {
  const initialLength = arrayOfChars.length

  for(let i = 0; i <= Math.floor((arrayOfChars.length - 1) / 2); i++) {
    const el = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i];
    arrayOfChars[arrayOfChars.length - 1 - i] = el;
  }
}

module.exports = reverse;