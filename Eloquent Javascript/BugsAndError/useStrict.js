"use strict";
// function canYouSpotTheProblem() {
//   for (counter = 0; counter < 10; counter++) {
//     "use strict"
//     console.log("Hello World");
//   }
// }
//
// canYouSpotTheProblem();

// pada variabel
// tanpa mode strict , ada global binding/ secara tidak langsung ada var sebagai default
// dengan mode strict, javascript akan membaca variabel tidak terdefinisi tanpa keyword
// a = 10;
// console.log(a);


// pada this keyword
// function Person(name) {
//   this.name = name;
// }
//
// let identity = Person("Ferguso");
// console.log(name);


// testing - toUpperCase
// function test(label, body) {
//   if (!body()) console.log(`Failed: ${label}`);
// }
//
//
// console.log(test("convert Latin text to uppercase", () => {
//   return "hello".toUpperCase() == "HELLO";
// }));
//
// console.log(test("convert Greek text to uppercase"));

console.log("awal program");

let x = -10;

try {
  x = x / -0;
  console.log("mencoba try catch");
} catch (e) {
  console.error("error karena pembagian");
} finally {
  console.log("selesai cek");
}

console.log(x);

console.log("akhir program");
