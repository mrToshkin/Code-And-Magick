'use strict';

(function () {
  
  window.backend = {
    load: function(onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      var URL = 'https://javascript.pages.academy/code-and-magick/data';
      
      xhrListener(xhr, onSuccess);
      
      xhr.open('GET', URL);
      xhr.send();
    },
    save: function(data, onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      var URL = 'https://javascript.pages.academy/code-and-magick';

      xhrListener(xhr, onSuccess);

      xhr.open('POST', URL);
      xhr.send(data);
    }
  }

  function xhrListener(xhr, onSuccess) {
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    
    xhr.timeout = 10000;
  }
  
  function onError(errorMessage) {
    let node = document.createElement('div');
  
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    
    node.textContent = errorMessage; 
    document.body.insertAdjacentElement('afterbegin', node);
  }
})();