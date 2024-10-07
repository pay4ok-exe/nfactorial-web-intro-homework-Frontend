"use strict";

// Task 1
const user = {
  name: null,
  age: 0,
  gender: undefined,
};

const name = prompt("Enter your name:");
const age = +prompt("Enter your age:");
const gender = prompt(
  "Your gender, if male then write M, else if female then write F"
).toUpperCase();

user.name = name;
user.age = age;
user.gender = gender;

console.log(user);

// Task 2
const userNumber = +prompt("Choose one digit from 0 to 10");
const random = Math.floor(Math.random() * 11);
if (userNumber > random) {
  console.log("You won");
  console.log(`Your number is ${userNumber} and PC number is ${random}`);
} else {
  console.log("PC won");
  console.log(`Your number is ${userNumber} and PC number is ${random}`);
}

// Task 3
// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let userStatus = +prompt("Your course level in unversity");
switch (userStatus) {
  case 1:
    alert("You are Freshman");
    break;
  case 2:
    alert("You are Sophomore ");
    break;
  case 3:
    alert("You are Junior ");
    break;
  case 4:
    alert("You are Senior ");
    break;
  default:
    alert("You already Graduated");
}

// Task 4
// 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) sum += i;
}
console.log(sum);

// 2
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

let i = 0;
while (i++ < 3) {
  alert(`number ${i}!`);
}
