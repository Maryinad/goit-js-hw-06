const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputField.value.length == inputField.dataset.length) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
}
