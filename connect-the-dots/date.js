// Date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
// const date = new Date(1/12/1998);
const month = date.getMonth();
// console.log(months[month]);
const day = date.getDay();
// console.log(days[day]);
// console.log(date.getDate());
// console.log(date.getFullYear());

const sentence = `${days[day]} the ${date.getDate()}th of ${
  months[month]
}, ${date.getFullYear()}`;

console.log(sentence);
document.body.innerHTML = sentence;
