const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  //   console.dir(formElements);
  const mail = formElements.email.value;
  //   //   console.log(mail);
  const password = formElements.password.value;
  //   console.log(password);
  const userData = { mail, password };

  if (mail === "" || password === "") {
    alert("Attention! All fields must be filled in");
  }
  console.log(userData);

  event.target.reset();
}
