'use strict';

(function () {
  
  window.backend = {
    load: function(onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      var URL = 'https://javascript.pages.academy/code-and-magick/data';
      
      xhrListener(xhr, onSuccess, onError);
      
      xhr.open('GET', URL);
      xhr.send();
    },
    save: function(data, onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      var URL = 'https://javascript.pages.academy/code-and-magick';

      xhrListener(xhr, onSuccess, onError);

      xhr.open('POST', URL);
      xhr.send(data);
    }
  }

  function xhrListener(xhr, onSuccess, onError) {
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
    
    xhr.timeout = 5000;
  }
})();