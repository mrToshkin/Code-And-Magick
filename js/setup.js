'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('setup-submit');
var setupCoat = setup.querySelector('.wizard-coat');
var setupEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var inputCoat = setup.querySelector('.input-coat-color');
var inputEyes = setup.querySelector('.input-eyes-color');
var inputFireball = setup.querySelector('.input-fireball-color');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARDS_COUNT = 4;
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLORS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupCoat.addEventListener('click', changeCoatColor);
setupEyes.addEventListener('click', changeEyesColor);
setupFireball.addEventListener('click', changeFireballColor);

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

function changeCoatColor(){
  var color = COLORS_COAT[getRandomNum(COLORS_COAT)];

  setupCoat.style.fill = color;
  inputCoat.value = color;
};
function changeEyesColor(){
  var color = COLORS_EYES[getRandomNum(COLORS_EYES)];

  setupEyes.style.fill = color;
  inputEyes.value = color;
};
function changeFireballColor(){
  var color = COLORS_FIREBALL[getRandomNum(COLORS_FIREBALL)];

  setupFireball.style.background = color;
  inputFireball.value = color;
};


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