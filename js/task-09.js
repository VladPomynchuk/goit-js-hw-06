function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при
// клике на button.change - color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.
const changeBtnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

const onChacgeBtnClick = event => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
};

changeBtnRef.addEventListener('click', onChacgeBtnClick);
