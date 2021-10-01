let arr = [1, 2, 4, 5, 7, 3, 5, 2];

// menyaring array sesuai kriteria
const filter = arr.filter(a => a < 5);
console.log('Filter : ' + filter);

// menambahkan 1 pada setiap array , lalu menyeleksi kembali (chaining)
const map = filter.map(a => a + 1).filter(a => a >= 3);
console.log('Map : ' + map);

// menyatukan nilai kriteria menjadi satu nilai
const reduce = filter.reduce((acc, curv) => acc + curv, 2)
console.log('reduce : ' + reduce);

// reduce function
function reduceFunction(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element)
  }
  return current;
}

console.log(reduceFunction([1, 2, 3, 4], (a, b) => a + b, 1));
