var div = $('wrapper');
console.log(div.getStyle('background-color')); // '#FFF'
$('wrapper').set('style', 'background-color: #000');
$('wrapper').set('styles', {'background-color': '#000', 'height': '200px'});
$('home-link').set('target', '_blank');
$('wrapper').set({
    'html': '<p>Hello!</p>',
    'class': 'greeting',
    'styles': {
        'background-color': '#000',
        'color': '#FFF'
    },
    'fancy-attrib': 'magical'
});
