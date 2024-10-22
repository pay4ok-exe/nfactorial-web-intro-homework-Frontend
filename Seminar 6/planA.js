// Создать функцию 'createPlan' которая после 5 секунд будет возвращать промис с двумя методами `.then`
// Первый метод должен вернуть в консоль текст: "План придуман, полетели!"
// Второй метод должен переписать глобальную переменную `window.plans.planA=true;`

function createPlan() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Plan Created"), 5000);
  });
}

createPlan().then((message) => {
  console.log(message);
});
