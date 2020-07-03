'use strict';

(function(){
  window.render = function (wizards) {
    var setupSimilarPerent = window.utils.setup.querySelector('.setup-similar-list');
    var setupSimilar = window.utils.setup.querySelector('.setup-similar');
    var fragment = document.createDocumentFragment();
    var wizardsAmount = wizards.length > 4 ? 4 : wizards.length;
  
    setupSimilarPerent.innerHTML = '';
    for (var i = 0; i < wizardsAmount; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarPerent.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  }

  function renderWizard(wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);
    
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    
    return wizardElement;
  }
})();