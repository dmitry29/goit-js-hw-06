function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls > input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesCountainerEl: document.querySelector("#boxes"),
};

let baseSizes = 20;
let addValue = 10;

refs.inputEl.addEventListener("input", onInputClick);

//! Получаем значение amount
function onInputClick(event) {
  let amount = event.currentTarget.value;
  console.log("Количество дивов -", amount);

  const elements = [];

  refs.createBtnEl.addEventListener("click", createBoxes);
  refs.destroyBtnEl.addEventListener("click", onDestroyBtnElClick);

  //! Цикл создания div
  function createBoxes() {
    for (let i = 1; i <= amount; i += 1) {
      console.log("amount", amount);

      const divEl = document.createElement("div");
      divEl.style.backgroundColor = getRandomHexColor();
      divEl.style.width = baseSizes + addValue + `px`;
      divEl.style.height = baseSizes + addValue + `px`;
      addValue += 10;
      console.log("width", divEl.style.width);
      console.log("height", divEl.style.height);
      elements.push(divEl);
    }
    refs.boxesCountainerEl.append(...elements);
  }

  //! Очищаем div#boxes
function onDestroyBtnElClick() {
  refs.boxesCountainerEl.innerHTML = "";
  refs.inputEl.value = "";
  baseSizes = 20;

  console.log("div#boxes очищен!");
}


} 