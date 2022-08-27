let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener('click', increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener('click', decrement);