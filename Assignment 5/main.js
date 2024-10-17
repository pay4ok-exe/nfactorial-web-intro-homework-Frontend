// 1. Найти таблицу с id="age-table".
let ageTable = document.getElementById("age-table");
console.log(ageTable);

// 2. Найти все элементы label внутри этой таблицы (их три).
let labels = ageTable.querySelectorAll("label");
console.log(labels);

// 3. Найти первый td в этой таблице (со словом «Age»).
let firstTd_1 = document.getElementsByTagName("td")[0];
let firstTd_2 = ageTable.querySelector("td");
console.log(firstTd_1);

// 4. Найти форму form с именем name="search".
let searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);

// 5. Найти первый input в этой форме.
let firstInput_2 = searchForm.querySelector("input");
let firstInput_1 = searchForm.getElementsByTagName("input")[0];
console.log(firstInput_2);

// 6. Найти последний input в этой форме.
let inputs = searchForm.querySelectorAll("input");
let lastInput = inputs[inputs.length - 1];
console.log(lastInput);

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert(body.firstChild.data); // что выведет?

// Answer: BODY

// Свойство tagName всегда возвращает имя тега в верхнем регистре, поэтому выводится "BODY".
// body.firstChild это комментарий он тоже является обьектом, и его значение BODY
