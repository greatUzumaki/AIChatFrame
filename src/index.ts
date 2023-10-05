(() => {
  // Создаем ссылку на стиль и добавляем в head
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = './dist/style.css';
  document.head.appendChild(linkElement);

  // Создаем основной контейнер чата
  const chatContainer = document.createElement('cdiv');
  chatContainer.id = 'chatContainer';

  // Создаем кнопку для открытия и закрытия чата
  const chatButtonContainer = document.createElement('cdiv');
  chatButtonContainer.id = 'chatButton_container';
  chatButtonContainer.classList.add('chatButton_container');

  const chatButton = document.createElement('cdiv');
  chatButton.id = 'chatButton';
  chatButton.classList.add('chatButton');

  // Стилизуем кнопку
  chatButton.style.background =
    'linear-gradient(95deg, rgb(47, 50, 74) 20%, rgb(66, 72, 103) 80%)';

  chatButtonContainer.appendChild(chatButton);

  // Добавляем иконку
  const iconWrap = document.createElement('cdiv');
  iconWrap.classList.add('iconWrap');
  const icon = document.createElement('cdiv');
  icon.classList.add('icon');
  icon.style.backgroundImage =
    'url(data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2231%22%20viewBox%3D%220%200%2030%2031%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M2.967%2022.226l-.025.008s7.698%2013.9%2026.975%205.546c0%200-1.495-1.752-4.384-3.52a14.067%2014.067%200%200%200%202.588-14.047c-2.655-7.297-10.7-11.07-17.964-8.425C2.89%204.433-.847%2012.492%201.81%2019.79c.313.863.703%201.677%201.157%202.436z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E%0A)';
  iconWrap.appendChild(icon);
  chatButton.appendChild(iconWrap);

  // Добавляем кнопку в основной контейнер
  chatContainer.appendChild(chatButtonContainer);

  // Создаем основное окно чата
  const chatMain = document.createElement('cdiv');
  chatMain.id = 'chatMain';
  chatMain.classList.add('notranslate');
  chatMain.style.animationDuration = '300ms';
  chatMain.style.animationTimingFunction =
    'cubic-bezier(0.39, 0.24, 0.21, 0.99)';
  chatMain.style.animationDelay = '0s';
  chatMain.style.animationIterationCount = '1';
  chatMain.style.animationDirection = 'normal';
  chatMain.style.animationFillMode = 'both';
  chatMain.style.animationPlayState = 'running';
  chatMain.style.animationName = 'ANIM_OPEN';
  chatMain.style.position = 'fixed';
  chatMain.style.display = 'none'; // Скрываем чат по умолчанию

  // Создаем кнопку для закрытия чата
  const closeButton = document.createElement('cdiv');
  closeButton.id = 'closeButton';
  closeButton.classList.add('closeButton');

  // Стилизуем кнопку закрытия
  const closeIcon = document.createElement('cdiv');
  closeIcon.id = 'closeIcon';
  closeIcon.classList.add('closeIcon');
  closeIcon.style.backgroundImage =
    'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(2%202)%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%23FFF%22%20opacity%3D%221%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212.75%22%20stroke%3D%22%23222D38%22%20stroke-width%3D%221.5%22%20opacity%3D%221%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23222D38%22%20opacity%3D%221%22%20transform%3D%22translate(6%206)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20width%3D%221.611%22%20height%3D%2213.9%22%20x%3D%225.435%22%20y%3D%22-.941%22%20rx%3D%22.806%22%20transform%3D%22rotate(45%206.24%206.01)%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20width%3D%221.611%22%20height%3D%2213.9%22%20x%3D%225.435%22%20y%3D%22-.941%22%20rx%3D%22.806%22%20transform%3D%22scale(-1%201)%20rotate(45%200%20-9.058)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A)';
  closeIcon.addEventListener('click', () => {
    // Обработчик клика по кнопке закрытия
    chatMain.style.display = 'none';
    chatButton.style.display = 'block';
  });
  closeButton.appendChild(closeIcon);

  // Добавляем кнопку закрытия в основное окно чата
  chatMain.appendChild(closeButton);

  // Окно чата
  const chat = document.createElement('cdiv');
  chat.classList.add('c-main');

  chatMain.appendChild(chat);

  // Добавляем основное окно чата в контейнер
  chatContainer.appendChild(chatMain);

  // Добавляем контейнер чата в body
  document.body.appendChild(chatContainer);

  // Обработчик клика по кнопке открытия и закрытия чата
  chatButton.addEventListener('click', () => {
    if (chatMain.style.display === 'none') {
      chatButton.style.display = 'none';
      chatMain.style.display = 'block';
    } else {
      chatButton.style.display = 'block';
      chatMain.style.display = 'none';
    }
  });
})();
