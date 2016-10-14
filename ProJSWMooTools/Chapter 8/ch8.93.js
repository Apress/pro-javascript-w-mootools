var link = $('home-link');
console.log(link.getProperty('target')); // '_blank'

// remove the target attribute
link.removeProperty('target');

console.log(link.getProperty('target')); // null
