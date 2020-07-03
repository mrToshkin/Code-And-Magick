'use strict';

(function(){
  window.wizards = [];
  for(let i = 0; i < window.wizardSetups.WIZARDS_COUNT; i++) {
    window.wizards.push({
      name: window.wizardSetups.FIRST_NAMES[window.utils.getRandomNum(window.wizardSetups.FIRST_NAMES)] + ' ' + window.wizardSetups.SECOND_NAMES[window.utils.getRandomNum(window.wizardSetups.SECOND_NAMES)],
      coatColor: window.wizardSetups.COLORS_COAT[window.utils.getRandomNum(window.wizardSetups.COLORS_COAT)],
      eyesColor: window.wizardSetups.COLORS_EYES[window.utils.getRandomNum(window.wizardSetups.COLORS_EYES)]
    });
  }
})();