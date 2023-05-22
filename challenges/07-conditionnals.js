const person1 = {
  name: "Bob",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "Patrick",
  age: 17,
  status: "tourist",
};

const statusCheck = (person) => {
  if (person.age >= 18 && person.status === "resident") {
    return "ok";
  } else {
    return "Go back";
  }
};

console.log(statusCheck(person1), statusCheck(person2));
