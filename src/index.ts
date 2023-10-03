(() => {
  const CHAT_ID = document?.currentScript?.getAttribute('c-id');
  if (!CHAT_ID) {
    throw Error('c-id is missing in <script> tag');
  }

  var iframe = document.createElement('iframe');

  iframe.src = 'https://www.example.com';
  iframe.width = '300';
  iframe.height = '200';

  document.body.appendChild(iframe);
})();
