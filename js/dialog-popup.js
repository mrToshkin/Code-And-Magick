'use strict';

(function(){
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = window.utils.setup.querySelector('.setup-close');
  var setupForm = window.utils.setup.querySelector('.setup-wizard-form');
  var defaultCoords;

  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);
  setupForm.addEventListener('submit', function(evt) {
    window.backend.save(new FormData(setupForm), closePopup, onError)
    evt.preventDefault();
  });
  setupOpen.addEventListener('keydown', function(evt) {
    if (window.utils.isEnterKeycode(evt)) {
      openPopup();
    }
  });
  setupClose.addEventListener('keydown', function(evt) {
    if (window.utils.isEnterKeycode(evt)) {
      closePopup();
    }
  });

  function onError(errorMessage) {
    var node = document.createElement('div');
    
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    
    node.textContent = errorMessage; 
    document.body.insertAdjacentElement('afterbegin', node);
  };

  function openPopup() {
    window.utils.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    defaultCoords = toDefaultCoords(window.utils.setup);
  };
  function closePopup() {
    window.utils.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

    window.utils.setup.style.left = defaultCoords.left + 'px';
    window.utils.setup.style.top = defaultCoords.top + 'px';
  };
  function onPopupEscPress(evt) {
    if (window.utils.isEscKeycode(evt)) {
      closePopup();
    }
  };
  function toDefaultCoords(block) {
    var coords = {
      left: block.offsetLeft,
      top: block.offsetTop 
    };

    return coords;
  }
})();