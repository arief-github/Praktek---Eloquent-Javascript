// retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("klunk");
  }
}


function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}

// console.log(reliableMultiply(8, 8));


// the locked box
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  content: [],
  get content() {
    if (this.locked) throw new Error("Locked");
    return this._content;
  }
}

function withBoxUnlocked(body) {
  let boxLockedOnEntry = box.locked;
  if (boxLockedOnEntry) {
    box.unlock();
  }
  try {
    body();
  } finally {
    if (boxLockedOnEntry) {
      box.lock();
    }
  }
}

// withBoxUnlocked(function() {
//   box.content = push("gold piece");
// })
//
// console.log(box.locked);

box.unlock();

withBoxUnlocked(function() {
  box.content.push("silver piece");
})
