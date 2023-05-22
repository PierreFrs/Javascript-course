// Arrays and for loops
// arrays
const namesArray = ["anna", "suzy", "bob"];
const lastName = "shakeandbake";
let newArray = [];

// for loop
for (let i = 0; i < namesArray.length; i++) {
  newArray.push(`${namesArray[i]} ${lastName}`);
}

console.log(newArray);
