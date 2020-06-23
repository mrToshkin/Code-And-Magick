'use strict';

(function () {
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = window.utils.setup.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    if (file) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
