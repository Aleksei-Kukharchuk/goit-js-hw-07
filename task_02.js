const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;

  return item;
});

ingredientsList.append(...ingredientsItem);
