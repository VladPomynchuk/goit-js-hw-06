// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его
// содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже
// добавили в исходные файлы задания.

const inputRef = document.querySelector('input#validation-input');
// console.log('inputRef', inputRef);

const onInputCheck = event => {
  const dataLengthRef = document.querySelector('input[data-length="6"]');

  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', onInputCheck);
