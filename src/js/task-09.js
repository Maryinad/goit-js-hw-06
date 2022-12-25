const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  nameColor: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.nameColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
