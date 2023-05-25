// apply - assign, use later, arguments - list of items

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I am ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`
  );
}

// assign, call it later
const susanGreet = greet.bind(susan, "toronto", "canada");
susanGreet();
