var div = $('wrapper');
var result = div.get(['html', 'class', 'style', 'fancy-attrib']);

console.log(result);
/*
{
    'html': '<p>Hello!</p>',
    'class': 'greeting', 
    'style': 'background-color: #000; color: #FFF;',
    'fancy-attrib': 'magical'
}
*/
