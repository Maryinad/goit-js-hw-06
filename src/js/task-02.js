const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const createEl = document.createElement("li");
    createEl.textContent = ingredient;
    createEl.classList.add("item");
    return createEl;
  });
};
const readyList = createIngredientsList(ingredients);

ingredientsList.append(...readyList);
console.log(readyList);
