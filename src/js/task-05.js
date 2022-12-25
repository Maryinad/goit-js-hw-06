const refs = {
  input: document.querySelector("input#name-input"),
  invitationText: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let value = event.currentTarget.value;
  refs.invitationText.textContent = value;
  if (value === "") {
    refs.firstText.innerHTML = "Anonymous";
  } else {
    value;
  }

  //   if (value === "") {
  //     event.preventDefault();
  //   } else {
  //     value;
  //   }
}
