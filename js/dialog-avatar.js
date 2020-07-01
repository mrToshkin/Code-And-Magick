'use strict';

(function () {
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = window.utils.setup.querySelector('.setup-user-pic');
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    if (file) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        setupOpenIcon.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
