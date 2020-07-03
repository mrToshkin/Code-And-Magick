'use strict';

(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  var fireballColor;
  
  window.wizard.onCoatChange = window.utils.debounce(function(color) {
    coatColor = color;
    updateFilter();
  });
  window.wizard.onEyesChange = window.utils.debounce(function(color) {
    eyesColor = color;
    updateFilter();
  });
  window.wizard.onFireballChange = window.utils.debounce(function(color) {
    fireballColor = color;
    updateFilter();
  });

  window.backend.load(onSuccess);

  function onSuccess(data) {
    wizards = data;
    updateFilter();
  };

  function updateFilter() {
    window.render(wizards.sort(wizardsComparator));
  };

  function wizardsComparator(left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
  };

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  
  function getRank(wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) rank += 2;
    if (wizard.colorEyes === eyesColor) rank += 1;
    if (wizard.colorFireball === fireballColor) rank += 1;
    return rank;
  }; 
})();