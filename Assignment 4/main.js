// Assignment 4

// Task 1
function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Родители разрешили?');
  // }

  return age > 18 ? true : confirm("Родители разрешили?");
}

// alert(checkAge(prompt("Enter your age!")));

// Task 2
function pow(x, n) {
  let res = 1;
  while (n-- > 0) res *= x;
  return res;
}

// alert(pow(prompt("Enter number!"), prompt("Enter pow number")));

// Task 3
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

let question = "Вы согласны?",
  yes = () => alert("Вы согласились."),
  no = () => alert("Вы отменили выполнение.");

// ask(question, yes, no);

// Task 3

let arr = [5, 2, 1, -10, 8, 8, 1];
let res = [];

while (arr.length > 0) {
  let max = Math.max(...arr);
  res.push(max);
  delete arr[arr.indexOf(max)];
  arr = arr.filter((value) => value !== undefined);
}

// alert(res);

// Task 4
let vasya = { name: "Вася", surname: "Пупкин", age: 25, id: 1 };
let petya = { name: "Петя", surname: "Иванов", age: 30, id: 2 };
let masha = { name: "Маша", surname: "Петрова", age: 29, id: 3 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

// alert(names);

// Task 5
let usersMapped = users.map((user) => ({
  fullname: user.name + " " + user.surname,
  id: user.id,
}));

let res5 = "";
usersMapped.forEach((user) => (res5 += `${user.fullname} ${user.id},\n`));

// alert(res5);

// Task 6
function getAverageAge(users) {
  let ages = users.map((user) => user.age);
  let totalAge = 0;
  for (const age of ages) totalAge += age;
  return totalAge / ages.length;
}

alert(getAverageAge(users));
