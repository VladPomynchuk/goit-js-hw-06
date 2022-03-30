// Задание 8
// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все
//  поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в
// обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом
// reset.

const formRef = document.querySelector('.login-form');
// console.log('formRef', formRef);

const onSubmit = event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  // email.name
  //   console.log('email.name', email.name);
  if (email.value === '' || password.value === '') {
    alert('все поля должны быть заполнены');
  } else {
    const allValues = {};
    console.log('allValues', allValues);
    allValues.email = email.value;
    allValues.password = password.value;
  }
  formRef.reset();
  //   console.log('event.currentTarget.email', event.currentTarget.email);
};

formRef.addEventListener('submit', onSubmit);
