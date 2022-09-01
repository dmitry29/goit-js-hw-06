/**
 * !Задание № 10
 * Создай функцию createBoxes(amount), которая принимает один параметр - число. 
 * Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls > input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesCountainerEl: document.querySelector("#boxes"),
};

refs.createBtnEl.addEventListener("click", createBoxes);
refs.destroyBtnEl.addEventListener("click", onDestroyBtnElClick);

//! Цикл создания div

function createBoxes(amount) {
  amount = refs.inputEl.value;
  console.log("Количество дивов -", amount);
  // let baseSizes = 20;
  // let addValue = 10;
  const elements = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    // divEl.style.width = baseSizes + addValue + `px`;
    // divEl.style.height = baseSizes + addValue + `px`;
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    // addValue += 10;
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
  console.log("div#boxes очищен!");
}