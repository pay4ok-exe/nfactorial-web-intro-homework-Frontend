// Task 1

const restaurantName = "Tatti shay";
let numberOfTables = 20;
let isOpen = true;

console.log(restaurantName, numberOfTables, isOpen);

let chefName = "Erkebulan";
let rating = 4.7;
let hasDelivery = true;
let nextAvailableTable = null;
let specialMenu;

console.log(chefName, rating, hasDelivery, nextAvailableTable, specialMenu);

let restaurant = {
  name: restaurantName, // Использование переменной restaurantName
  address: "near to SDU",
  tables: numberOfTables,
  open: isOpen,
  staff: {
    chef: chefName,
    waiters: 10,
  },
};

console.log(restaurant);

restaurant.owner = "Mrs. Dalida";
restaurant["cuisine"] = "Korean";
restaurant.tables = 25;
console.log(restaurant);

delete restaurant.staff.chef;
console.log(restaurant);

delete restaurant["cuisine"];
console.log(restaurant);

// Task 2
const vehicle = {};

vehicle.brandName = "Amd Mersedes";
console.log(vehicle);

vehicle.model = "S-class";
console.log(vehicle);

vehicle.model = "A-class";
console.log(vehicle);

delete vehicle.model;
console.log(vehicle);

// Task 3
let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let sum = 0;
for (let name in salaries) {
  sum += salaries[name]; // Суммируем зарплаты
}

console.log(sum);
