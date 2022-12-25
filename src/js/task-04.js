const refs = {
  increaseAmountBtn: document.querySelector(".button-2"),
  reduceAmountBtn: document.querySelector(".button-1"),
  amountCounter: document.querySelector("#value"),
};

let counterValue = 0;
refs.increaseAmountBtn.addEventListener("click", onIncreaseAmountBtn);
refs.reduceAmountBtn.addEventListener("click", onReduceAmountBtn);

function onIncreaseAmountBtn() {
  counterValue += 1;
  refs.amountCounter.textContent = counterValue;
}

function onReduceAmountBtn() {
  counterValue -= 1;
  refs.amountCounter.textContent = counterValue;
}
