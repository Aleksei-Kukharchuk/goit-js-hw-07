const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
let acc = 0;

const increment = () => {
  acc = acc + 1;
  counterValue.textContent = acc;
};

const decrement = () => {
  acc = acc - 1;
  counterValue.textContent = acc;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

/* 1. Прослушиваем кнопку и счетичк значений;
   3. Выполняется функция по оперцаии(+ или -);
   4. Функция записывает новое значение в счетчик;
*/
