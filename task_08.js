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
  number: document.querySelector("#controls input"),
  render: document.querySelector("button[data-action='render']"),
  destroy: document.querySelector("button[data-action='destroy']"),
  collection: document.querySelector("#boxes"),
};

console.log(refs.number);
console.log(refs.render);
console.log(refs.destroy);

refs.number.addEventListener("input", test);
refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function test(number) {
  console.log(number.currentTarget.value);
}

function createBoxes(amount) {
  return refs.collection.insertAdjacentHTML("afterbegin", "<div></div>");
}

function destroyBoxes() {
  return refs.collection.removeChild();
}
