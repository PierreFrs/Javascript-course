let text = " Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("z"));
console.log(text.trim().startsWith("Peter"));
console.log(text.includes("eter"));
console.log(text.slice(0, 2));
console.log(text.slice(-2));

const fullName = ({ firstName, lastName }) => {
  return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};

const nameObject = {
  firstName: "Pierre",
  lastName: "Fraisse",
};

console.log(fullName(nameObject));
