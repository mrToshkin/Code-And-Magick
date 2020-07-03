'use strict';

(function(){
  var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var COLORS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupCoat = window.utils.setup.querySelector('.wizard-coat');
  var setupEyes = window.utils.setup.querySelector('.wizard-eyes');
  var setupFireball = window.utils.setup.querySelector('.setup-fireball-wrap');

  var inputCoat = window.utils.setup.querySelector('.input-coat-color');
  var inputEyes = window.utils.setup.querySelector('.input-eyes-color');
  var inputFireball = window.utils.setup.querySelector('.input-fireball-color');

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    },
    onFireballChange: function (color) {
      return color;
    }
  };

  setupCoat.addEventListener('click', changeCoatColor);
  setupEyes.addEventListener('click', changeEyesColor);
  setupFireball.addEventListener('click', changeFireballColor);
  
  function changeCoatColor(){
    var color = COLORS_COAT[window.utils.getRandomNum(COLORS_COAT)];
  
    setupCoat.style.fill = color;
    inputCoat.value = color;
    wizard.onCoatChange(color);
  };
  function changeEyesColor(){
    var color = COLORS_EYES[window.utils.getRandomNum(COLORS_EYES)];
  
    setupEyes.style.fill = color;
    inputEyes.value = color;
    wizard.onEyesChange(color);
  };
  function changeFireballColor(){
    var color = COLORS_FIREBALL[window.utils.getRandomNum(COLORS_FIREBALL)];
  
    setupFireball.style.background = color;
    inputFireball.value = color;
    wizard.onFireballChange(color);
  };

  window.wizard = wizard;
})();