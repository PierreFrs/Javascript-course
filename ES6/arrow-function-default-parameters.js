// default parameters, arrow functions gotchas

const john = "john";
const peter = "peter";

function sayHi(person = "Susan") {
  console.log(`Hi ${person}`);
}
const sayHello = (person = "Bob") => console.log(`Hello ${person}`);

sayHi();
sayHello(peter);
