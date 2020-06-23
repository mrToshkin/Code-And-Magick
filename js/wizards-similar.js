'use strict';

(function(){
  var setupSimilar = window.utils.setup.querySelector('.setup-similar');
  var similarListElement = window.utils.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  setupSimilar.classList.remove('hidden');
  appendElements(fragment, window.wizards);
  similarListElement.appendChild(fragment);

  function appendElements(dest, array) {
    for (var i = 0; i < array.length; i++) {
      dest.appendChild(renderWizard(array[i]));
    }
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    
    return wizardElement;
  }
})();