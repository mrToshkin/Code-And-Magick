'use strict';

(function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    setup: document.querySelector('.setup'),
    isEnterKeycode: function(evt) {
        return evt.keyCode === ENTER_KEYCODE;
    },
    isEscKeycode: function(evt) {
      return evt.keyCode === ESC_KEYCODE;
    },
    getRandomNum: function(array) {
      return Math.floor(Math.random() * array.length);
    },
  }
})();