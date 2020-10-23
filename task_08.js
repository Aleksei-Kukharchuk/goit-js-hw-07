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
  collection: document.querySelector("#boxes")
};

refs.render.addEventListener("click", getAmount);
refs.destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const elements = Array.from({ length: amount }, () => undefined)
  const boxes = elements.map((element, index) => {
    const basicSize = 30;
    let size = basicSize + index * 10;
    return element = `<div style='width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )'></div>`;
  });
  refs.collection.insertAdjacentHTML('afterbegin', boxes.join(''))
};

/* Очитска коллекции */
function destroyBoxes() {
  refs.collection.innerHTML = " ";
}

/* Функция рандомного выбора цветов */
function random() {
  return Math.floor(Math.random() * 256);
}
