const input = document.querySelector("input#font-size-control");
const title = document.querySelector("span#text");

input.addEventListener("input", onControlSlider);

function onControlSlider(event) {
  title.style.fontSize = event.currentTarget.value + "px";
}
