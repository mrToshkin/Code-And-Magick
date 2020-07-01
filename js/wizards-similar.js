'use strict';

(function(){
  const WIZARDS_AMOUNT = 4;

  window.backend.load(onSuccess, onError);

  function onSuccess(wizards) {
    var similarListElement = window.utils.setup.querySelector('.setup-similar-list');
    var setupSimilar = window.utils.setup.querySelector('.setup-similar');
    var fragment = document.createDocumentFragment();
    var shuffledWizards = window.utils.shuffle(wizards);

    setupSimilar.classList.remove('hidden');
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(shuffledWizards[i]));
    }
    similarListElement.appendChild(fragment);
  }

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

  function renderWizard(wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);
    
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    
    return wizardElement;
  }
})();