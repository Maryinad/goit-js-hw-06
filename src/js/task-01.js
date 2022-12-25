const categoriesNumber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesNumber.length}`);

const infoAboutItems = document.querySelectorAll("#categories > li");

infoAboutItems.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.children.length}`
  );
});
