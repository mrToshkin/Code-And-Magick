'use strict';

(function() {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 150;
  var CLOUD_Y = 10;
  var TITTLE_GAP = 50;
  var GAP = 10;
  var FONT_GAP = 20;
  var TEXT_WIDTH = 85;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  
  window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
    ctx.fillStyle = '#000';
  
    var maxTime = getMaxElement(times);
  
    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = `hsl(240, ${Math.random() * 100}%, 50%)`;
      if (names[i] == 'Вы') {
        ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      }
      
      ctx.fillRect(
        CLOUD_X + GAP + TITTLE_GAP + TEXT_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP,
        BAR_WIDTH, // width
        -((BAR_HEIGHT * times[i]) / maxTime)  //height
        );
      ctx.fillStyle = '#000';
      ctx.fillText(
        names[i],
        CLOUD_X + GAP + TITTLE_GAP + TEXT_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP
      );
      ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X + GAP + TITTLE_GAP + TEXT_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP - (FONT_GAP * 1.5) -((BAR_HEIGHT * times[i]) / maxTime)
      );
    }
  
    ctx.font = '16px PT Mono';
    ctx.textBaseLine = 'hanging';
    ctx.textAlign = 'center';
    ctx.fillText(
      'Вы победили!',
      CLOUD_X + (CLOUD_WIDTH / 2),
      CLOUD_Y + (TITTLE_GAP / 2)
    );
    ctx.fillText(
      'Список результатов:',
      CLOUD_X + (CLOUD_WIDTH / 2),
      CLOUD_Y + (TITTLE_GAP / 2) + FONT_GAP
    );
    ctx.textAlign = 'left';
  };
  
  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };
  function getMaxElement(arr) {
    var maxElement = arr[0];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  
    return maxElement;
  };
})();