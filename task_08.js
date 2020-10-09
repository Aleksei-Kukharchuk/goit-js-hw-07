/* 
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input 
и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), 
которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount 
и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире 
и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const refs = {
  render: document.querySelector("[data-action='render']"),
  destroy: document.querySelector("[data-action='destroy']"),
  collection: document.querySelector("#boxes"),
};

refs.render.addEventListener("click", getAmount);
refs.destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let elements = new Array(amount);
  elements.map((element) => {
    let size = basicSize + elements.indexOf[element] * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba(${random()}, ${random()}, ${random()})`;
  });

  /* let fragment = document.createDocumentFragment();
  for (let i = 0; i <= amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba(${random()}, ${random()}, ${random()})`;
    fragment.appendChild(div);
  } */
  /* refs.collection.appendChild(...elements); */
}

function destroyBoxes() {
  refs.collection.innerHTML = " ";
}

function random() {
  return Math.floor(Math.random() * 256);
}
