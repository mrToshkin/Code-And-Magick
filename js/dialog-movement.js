'use strict';

(function () {
  var dialogHandler = window.utils.setup.querySelector('.upload');
  
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    
    var dragged = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY 
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.utils.setup.style.left = (window.utils.setup.offsetLeft - shift.x) + 'px';
      window.utils.setup.style.top = (window.utils.setup.offsetTop - shift.y) + 'px';
    };

    function onMouseUp (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };  
  });
})();
