// Напиши скрипт который, при наборе текста в инпуте input#name - input
//     (событие input), подставляет его текущее значение в span#name - output.Если
//     инпут пустой, в спане должна отображаться строка "Anonymous".
const inputRef = document.querySelector('input#name-input');
// console.log('inputRef', inputRef);
const outputRef = document.querySelector('span#name-output');
// console.log('outputRef', outputRef);
const onInputChange = event => {
  if (event.currentTarget.value === '') {
    outputRef.textContent = 'Anonymous';
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
};
inputRef.addEventListener('input', onInputChange);
// таск 5 - потрібна умова АБО Anonymous, АБО те що ввів юзер
