// Solving it after reading the interview cake solution, from memory
function mergeArrays(myArray, alicesArray) {
  const merged = [];

  let myIndex = 0;
  let alicesIndex = 0;
  let currentIndex = 0;

  while (currentIndex < myArray.length + alicesArray.length) {
    // check if exhausted
    const mineExhausted = myIndex >= myArray.length;
    const alicesExhausted = alicesIndex >= alicesArray.length;

    if (
      !mineExhausted &&
      (alicesExhausted || myArray[myIndex] < alicesArray[alicesIndex])
    ) {
      merged[currentIndex] = myArray[myIndex];
      myIndex++;
    } else {
      merged[currentIndex] = alicesArray[alicesIndex];
      alicesIndex++;
    }

    currentIndex++;
  }

  console.log(merged);

  return merged;
}

// Solving the problem without help from interviewcake
function mergeArraysMine(myArray, alicesArray) {
  // Combine the sorted arrays into one large sorted array
  const mergedArray = [];

  for (
    let i = 0;
    i <=
    (myArray.length > alicesArray.length ? myArray.length : alicesArray.length);
    i++
  ) {
    const myItem = myArray[i];
    const alicesItem = alicesArray[i];

    if (myItem && alicesItem) {
      mergedArray.push(myItem < alicesItem ? myItem : alicesItem);
      mergedArray.push(myItem > alicesItem ? myItem : alicesItem);
    }

    if (!alicesItem && myItem) {
      mergedArray.push(myItem);
    }

    if (!myItem && alicesItem) {
      mergedArray.push(alicesItem);
    }

    // final check to ensure that the required order is maintained
    if (mergedArray[i] < mergedArray[i - 1]) {
      let temp = mergedArray[i - 1];
      mergedArray[i - 1] = mergedArray[i];
      mergedArray[i] = temp;
    }
  }

  return mergedArray;
}

module.exports = mergeArrays;
