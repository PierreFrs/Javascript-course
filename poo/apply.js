// apply - runs instantly, arguments - array of items

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

// greet.call(john, "san-diego", "us");
// greet.call(susan);
// greet.call({ name: "peter", age: 30 });

greet.apply(john, ["san-diego", "us"]);
greet.apply(susan);
greet.apply({ name: "peter", age: 30 });
