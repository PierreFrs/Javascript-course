// Array iterators challenges

// have access to students from data.js

// add a 'student' role to each student with map

const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});
// console.log(updatedStudents);

// return scores that are equal or bigger to 80
const highScores = students.filter(function (student) {
  //   if (student.score >= 80) {
  //     return student;
  //   }

  // if (student.score >= 80) return student;

  return student.score >= 80;
});

// console.log(highScores);

// find a specific id
const specificId = students.find(function (student) {
  return student.id === 3;
});
// console.log(specificId);

// reduce
const averageScore =
  students.reduce(function (acc, currItem) {
    return acc + currItem.score;
  }, 0) / students.length;

// console.log(averageScore);

const subject = "math";

const total = {};
total.math = "some value";
total[subject] = "some value";
// console.log(total);

const survey = students.reduce(function (survey, student) {
  //   console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});
console.log(survey);
