function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

// function look() {
//   if (promptDirection("Which way?") == "L") {
//     return "a house"
//   } else {
//     return "two angry bears";
//   }
// }
//
// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }

// try {
//   console.log("this line is executed");
//   // throw new Error("whoops");
// } catch (e) {
//   console.log("there was an error");
// } finally {
//   console.log("...always executed");
//   console.log("perform cleanup here");
// }


// nested try-blocks -  sumber MDN Docs

// try {
//   try {
//     throw new Error('oops');
//   } finally {
//     console.log('finally');
//   }
//
// } catch (ex) {
//   console.log('outer', ex.message);
// }


// try {
//   try {
//     throw new Error('oops')
//   } catch (ex) {
//     console.error('inner', ex.message);
//   } finally {
//     console.log('finally');
//   }
// } catch (ex) {
//   console.error('outer', ex.message);
// }


// try {
//   try {
//     throw new Error("oops")
//   } catch (ex) {
//     console.error('inner', ex.message);
//     throw ex;
//   } finally {
//     console.log('finally');
//   }
// } catch (ex) {
//   console.error('outer', ex.message);
// }


// seletive catching : error output will handle by catch, and catch is in the for (infinite) loop
// for (;;) {
//   try {
//     let dir = promptDirection("Where?");
//     console.log("You choose ", dir);
//     break;
//   } catch (e) {
//     console.log("Not a valid direction. Try again.");
//   }
// }

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You choose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again");
    } else {
      throw e;
    }
  }
}
