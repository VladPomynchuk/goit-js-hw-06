// Напиши скрипт который, при наборе текста в инпуте input#name - input
//     (событие input), подставляет его текущее значение в span#name - output.Если
//     инпут пустой, в спане должна отображаться строка "Anonymous".
const inputRef = document.querySelector('input#name-input');
// console.log('inputRef', inputRef);
const outputRef = document.querySelector('span#name-output');
// console.log('outputRef', outputRef);
const onInputChange = event => {
  outputRef.textContent = event.currentTarget.value;
};
inputRef.addEventListener('input', onInputChange);
