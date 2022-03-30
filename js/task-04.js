// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны
// увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;

const incrementRef = document.querySelector(
  'button[data-action = "increment" ]',
);
console.log(incrementRef);

const decrementRef = document.querySelector(
  'button[data-action = "decrement" ]',
);
console.log(decrementRef);

decrementRef.addEventListener('click', () => {
  counterValue -= 1;
  console.log(counterValue);
  document.querySelector('span#value').textContent = `${counterValue}`;
});

incrementRef.addEventListener('click', () => {
  counterValue += 1;
  console.log(counterValue);
  document.querySelector('span#value').textContent = `${counterValue}`;
});
