function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}

let result = firstElement([0]);

console.log(result);
