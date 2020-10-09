const elCategorie = document.querySelectorAll("#categories .item");

console.log(`В списке ${elCategorie.length} категории`);

elCategorie.forEach((el) => {
  const categroieName = el.querySelector("h2");
  console.log(`Категория: ${categroieName.textContent}`);
  const elAmount = el.querySelectorAll("li");
  console.log(`Количество элементов: ${elAmount.length}`);
});
