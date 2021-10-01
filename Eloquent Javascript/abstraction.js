//

// mencetak nomor sesuai dengan jumlah perulangan/iterasi yang ditetapkan
for (let i = 0; i < 5; i++) {
  // PRINT 5 NUMBER
  // console.log(i);
}

// mencetak nomor sesuai dengan jumlah yang kita tetapkan pada parameter fungsi
function repeat(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// repeat(20)
// kita tentukan sebanyak 20

// mencetak nomor dengan memadukan console log sebagai arguments
function repeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

// repeatLog(10, console.log)

const arr = [1, 2, 4, 5, 6, 10, 11];
const newFilter = arr.filter(a => a >= 3);
const newMap = arr.map(a => a - 2)
const newReduce = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 4)
const chaining = arr.filter(a => a >= 5).map(a => a + 10).filter(a => a >= 20).reduce((acc, curv) => acc + curv, 1);
// console.log('Filtering : ' + newFilter);
//
// console.log('Map : ' + newMap);
// console.log('Reduce : ' + newReduce);
// console.log('Chaining : ' + chaining);
// console.log(arr);
