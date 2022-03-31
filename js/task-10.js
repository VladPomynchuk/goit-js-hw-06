function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает
// столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию
// getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все
// созданные элементы.
const inputRef = document.querySelector('div#controls input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

const createBoxes = amount => {
  amount = inputRef.value;

  let divEl = '';

  for (let i = 0; i < amount; i += 1) {
    divEl += '<div></div>';
  }

  boxesRef.insertAdjacentHTML('afterbegin', divEl);

  const divArray = boxesRef.querySelectorAll('div');

  divArray.forEach((el, index) => {
    el.style.width = `${30 + 10 * index}px`;
    el.style.height = `${30 + 10 * index}px`;
    el.style.backgroundColor = getRandomHexColor();
  });
};

const onCreateBtn = event => {
  createBoxes();
};

const onDestroyBtn = event => {
  boxesRef.innerHTML = '';
};

createBtnRef.addEventListener('click', onCreateBtn);
destroyBtnRef.addEventListener('click', onDestroyBtn);
