// TASK 1
const btn1 = document.querySelector(".btn1");

// btn1.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   const t2 = document.querySelector(".t2");
//   t2.remove();
//   // alert('HI you pressed me')
// });

// TASK 2

btn1.addEventListener("click", () => alert("1"));
btn1.removeEventListener("click", () => alert("1"));

btn1.onclick = () => alert(2);

// ANSWER: When user clicks button will give alert step by step like that
// first: 1
// second 2

// TASK 3

let panes = document.querySelectorAll(".message");
let btns = document.querySelectorAll(".rmv_btn");
console.log(panes);

btns.forEach((button) => {
  // pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  // кнопка становится первым потомком плитки (pane)
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
});

// EXTRA 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberContainer = document.getElementById("numberContainer");
let startIndex = 0;
const visibleCount = 4;
function renderNumbers() {
  numberContainer.innerHTML = "";
  const visibleNumbers = numbers.slice(startIndex, startIndex + visibleCount);
  visibleNumbers.forEach((num) => {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number", `color-${num}`);
    numberDiv.textContent = num;
    numberContainer.appendChild(numberDiv);
  });
}

document.getElementById("nextButton").addEventListener("click", () => {
  if (startIndex + visibleCount < numbers.length) {
    startIndex++;
    renderNumbers();
  }
});
document.getElementById("prevButton").addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex--;
    renderNumbers();
  }
});

renderNumbers();

const toggleButton = document.getElementById("toggleButton");
const menuItems = document.getElementById("menuItems");

let isOpen = false;

toggleButton.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menuItems.classList.remove("hidden");
    toggleButton.textContent = "▼ Сладости (нажми меня)!";
  } else {
    menuItems.classList.add("hidden");
    toggleButton.textContent = "▶ Сладости (нажми меня)!";
  }
});
