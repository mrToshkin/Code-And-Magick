'use strict';

(function(){
  var KeyCode = {
    ESC: 27,
    ENTER: 13
  };
  var DEBOUNCE_INTERVAL = 500; // ms

  window.utils = {
    setup: document.querySelector('.setup'),
    isEnterKeycode: function(evt) {
        return evt.keyCode === KeyCode.ENTER;
    },
    isEscKeycode: function(evt) {
      return evt.keyCode === KeyCode.ESC;
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
    },
    debounce: function(fun) {
      var lastTimeout = null;
  
      return function() {
        var args = arguments;
        if (lastTimeout) clearTimeout(lastTimeout);
        lastTimeout = setTimeout(function() {
          fun.apply(null, args);
        }, DEBOUNCE_INTERVAL);
      };
    }
  }
})();