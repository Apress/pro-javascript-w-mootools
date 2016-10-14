var square = $('square');

var tween = new Fx.Tween(square, {
    duration: 1000,
    fps: 50,
});

tween.start('left', 30);

tween.cancel();
