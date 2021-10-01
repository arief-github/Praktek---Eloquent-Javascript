// asynchronous menggunakan konsep queue
// setTimeout(() => console.log("Tick"), 1000);

// synchronous
// let x = 3
// x += 4;
// console.log(x);

// asynchronous
// let x = 3;
// setTimeout(() =>  console.log(x = x + 4), 1000);
// setInterval(() => console.log(x += 5),2000);

// source by medium
// function calculate(x,y){
//   return x*y;
// }
let formatter = new Intl.NumberFormat('en-US', {
  style:'currency',
  currency: 'USD',
});
// let result = formatter.format(calculate(10,20));
// console.log(result);

function calculate(param1, param2, callback) {
  let result = param1 + param2;
  if (typeof callback === 'function') {
    result = callback(param1, param2);
  }
  return result;
}

let res = calculate(2000,4000, function(x,y){return formatter.format(x+y)});
// setInterval(() => console.log(res), 2000);


// callbacks pada asynchronous
// synchronous
// function p1(){
//   console.log('p1 done');
// }
//
// function p2(){
//   console.log('p2 done');
// }
//
// function p3(){
//   console.log('p3 done');
// }


// asynchronous
// function p1(){
//   console.log('p1 done');
// }
//
// function p2(callback){
//   setTimeout(() => {console.log('p2 done'),callback()},1000)
// }
//
// function p3(){
//   console.log('p3 done');
// }
//
//
// p1();
// p2(p3);


function double(value, callback){
  setTimeout(() => callback(value * 2),1000);
}
console.log(double(3, (x) => console.log(`I was given: ${x}`)));
