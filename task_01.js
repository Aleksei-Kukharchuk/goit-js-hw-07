const elCategorie = document.querySelectorAll("#categories .item");

elCategorie.forEach((el) => {
  const categroieName = el.querySelector("h2");
  console.log(`Категория: ${categroieName.textContent}`);
  const elAmount = el.querySelectorAll("li");
  console.log(`Количество элементов: ${elAmount.length}`);
});
