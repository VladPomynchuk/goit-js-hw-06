// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('input#font-size-control');

const onInputChange = event => {
  //   const fontSize = event.currentTarget.value + 'px';
  document.querySelector(
    'span#text',
  ).style.fontSize = `${event.currentTarget.value}px`;
};

inputRef.addEventListener('input', onInputChange);
