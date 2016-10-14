var square = $('square');

var tween = new Fx.Tween(square, {
    duration: 1000,
    fps: 50,
    link: 'cancel'
});


tween.start('height', 30);
tween.start('width', 30);
