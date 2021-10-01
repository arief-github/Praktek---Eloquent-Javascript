// let fifteen = Promise.resolve(15);
// fifteen.then(value => console.log(`Got ${value}`));

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 3000)
// });

// myPromise.then(value => {console.log(value)}).catch(err => {console.log(err)})
// .then(value => {console.log('and bar again')});
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve("Success!")}, 250)
});
myFirstPromise.then((successMessage) => {
  console.log("Yay!" + successMessage);
});
