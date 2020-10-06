const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

const increment = () => {
  let result = counterValue.textContent;
  return (counterValue.textContent = +result + 1);
};

const decrement = () => {
  let result = counterValue.textContent;
  return (counterValue.textContent = +result - 1);
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

/* 1. Прослушиваем кнопку и счетичк значений;
   3. Выполняется функция по оперцаии(+ или -);
   4. Функция записывает новое значение в счетчик;
*/
