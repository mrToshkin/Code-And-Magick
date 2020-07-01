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
    shuffle: function(array) {
      let i = array.length,
          j = 0,
          temp;
    
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
    
          // swap randomly chosen element with current element
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    
      return array;
    }
  }
})();