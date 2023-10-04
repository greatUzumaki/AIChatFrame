(() => {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = './dist/style.css';
  document.head.appendChild(linkElement);

  const chatComponent = document.createElement('jdiv');
  chatComponent.innerHTML = `
        <jdiv class="chat-header">Чат с поддержкой</jdiv>
        <jdiv class="chat-messages">
        </jdiv>
        <textarea class="message-input" placeholder="Введите сообщение"></textarea>
        <button class="send-button">Отправить</button>
    `;

  document.body.appendChild(chatComponent);
})();
