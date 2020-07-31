function reverseWords(message) {

  // We break the problem down first by having a function to reverse in place an array between any two indexes
  function reverseArray(left, right, array) {

    // once the left is smaller than the right, we want to stop, as we have are mopving beyond the middle.
    // We want to work outside in
    while (left < right) {
      // assign the item in the left to a temp variable
      let temp = array[left];
      // Now we switch the right over to the left
      array[left] = array[right];
      // Now we assign what was the left value to the right
      array[right] = temp;
      // Progress the left up towards the middle
      left++;
      // progress the riught down towards the middle
      right--;
    }
  }

  // We start by reversing the whole array
  // So that we can move character by character, and "unreverse" each word when we hit a space
  reverseArray(0, message.length -1, message);

  // Track the index which is the start of the word we are currently processing
  let currentWordStartIndex = 0;

  // Iterate over the whole message
  for(let i = 0; i <= message.length; i++) {

    // if the current character is a space, or we are at the end of the message array
    if(message[i] === " " || i === message.length) {
      // reverse the characters in the array between those two points, backing up to account for the space, or the end of the array
      reverseArray(currentWordStartIndex, i - 1, message);

      //progress current index beyond the space so it stays in the array as is.
      currentWordStartIndex = i + 1;
    }
  }
}


function reverseWordsOld(message) {
  let currentWord = "";
  let wordCache = [];
  
  for(let i = 0; i < message.length; i++) {
    let char = message[i];
    // Add the current word to the word cache if we hit a space
    if(char === " ") {
      // add the current word to the beginning of the array
      currentWord = char + currentWord;
      wordCache.unshift(currentWord);
      // Push in the space as well
      // reset the current word
      currentWord = "";
    } else {
      // othewise, add the character to the current word in progress
      currentWord += char;
    }
  }
  
  // if there is a word left after the loop, it was a single word.
  // Add it to the word cache
  if(!!currentWord.length) {
    wordCache.unshift(currentWord);
  }
  
  message.splice(0, message.length, ...wordCache)
}

module.exports = reverseWords;