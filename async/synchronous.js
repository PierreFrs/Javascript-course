// Javascript is single threaded, synchronous language

console.log(`I'm first`);
console.log(`I'm second`);
console.log(`I'm third`);

console.log(`I'm first`);
boilingWater();
console.log(`I'm third`);

function boilingWater() {
  console.log(`I'm boiling water`);
  for (let i = 0; i < 10000; i++) {
    console.log(`I'm not done...`);
  }
  console.log(`done !`);
}
