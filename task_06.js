/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте,
 указывается в его атрибуте data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
 */

const input = document.querySelector("#validation-input");

input.addEventListener("change", onInputCheck);

function onInputCheck(inputText) {
  inputText.currentTarget.value.length == input.dataset.length
    ? input.classList.toggle("invalid")
    : input.classList.add("valid", "invalid");
}
