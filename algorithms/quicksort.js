const quicksort = (array) => {
  if(array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];


}

module.exports = quicksort;