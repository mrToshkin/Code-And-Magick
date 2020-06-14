'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARDS_COUNT = 4;
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
for(let i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push({
    name: FIRST_NAMES[getRandomNum(FIRST_NAMES)] + ' ' + SECOND_NAMES[getRandomNum(SECOND_NAMES)],
    coatColor: COLORS_COAT[getRandomNum(COLORS_COAT)],
    eyesColor: COLORS_EYES[getRandomNum(COLORS_EYES)]
  });
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  
  return wizardElement;
}
function getRandomNum(array) {
  return Math.floor(Math.random() * array.length);
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');

/* let getRandomNum = (array) => Math.floor(Math.random() * array.length); */

/* function Wizard() {
  for(let i = 0; i < 4; i++) {
    this[i].name = getName();
    this[i].coatColor = getCoatColor();
    this[i].eyesColor = getEyesColor();
  }
}

let wizards = new Wizard();

var getName = function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var i = Math.floor(Math.random() * FIRST_NAMES.length);
  var j = Math.floor(Math.random() * SECOND_NAMES.length);

  return FIRST_NAMES[i] + ' ' + SECOND_NAMES[j];
}

var getCoatColor = function () {
  var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

var getEyesColor = function () {
  var COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  return COLORS[Math.floor(Math.random() * COLORS.length)];
} */