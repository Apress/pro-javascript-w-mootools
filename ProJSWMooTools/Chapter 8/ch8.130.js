var myDiv = new Element('div', { 'class': 'yes' });

console.log(myDiv.get('class')); // 'yes'

myDiv.switchClass('yes', 'no');
console.log(myDiv.get('class')); // 'no'

myDiv.switchClass('yes', 'no');
console.log(myDiv.get('class')); // 'yes'
