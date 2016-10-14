var link = $('home-link');
console.log(link.getProperty('target')); // '_blank'

// remove the target attribute
link.setProperty('target', null);

console.log(link.getProperty('target')); // null
