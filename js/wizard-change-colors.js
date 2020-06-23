'use strict';

(function(){
  var setupCoat = window.utils.setup.querySelector('.wizard-coat');
  var setupEyes = window.utils.setup.querySelector('.wizard-eyes');
  var setupFireball = window.utils.setup.querySelector('.setup-fireball-wrap');
  var inputCoat = window.utils.setup.querySelector('.input-coat-color');
  var inputEyes = window.utils.setup.querySelector('.input-eyes-color');
  var inputFireball = window.utils.setup.querySelector('.input-fireball-color');

  setupCoat.addEventListener('click', changeCoatColor);
  setupEyes.addEventListener('click', changeEyesColor);
  setupFireball.addEventListener('click', changeFireballColor);
  
  function changeCoatColor(){
    var color = window.wizardSetups.COLORS_COAT[window.utils.getRandomNum(window.wizardSetups.COLORS_COAT)];
  
    setupCoat.style.fill = color;
    inputCoat.value = color;
  };
  function changeEyesColor(){
    var color = window.wizardSetups.COLORS_EYES[window.utils.getRandomNum(window.wizardSetups.COLORS_EYES)];
  
    setupEyes.style.fill = color;
    inputEyes.value = color;
  };
  function changeFireballColor(){
    var color = window.wizardSetups.COLORS_FIREBALL[window.utils.getRandomNum(window.wizardSetups.COLORS_FIREBALL)];
  
    setupFireball.style.background = color;
    inputFireball.value = color;
  };
})();