var morph = new Fx.Morph('square', {
    duration: 1000,
    fps: 50
});
morph.start({
    'height': 30,
    'width': 30
});
morph.start({
    'height': [20, 30],
    'width': 30
});
