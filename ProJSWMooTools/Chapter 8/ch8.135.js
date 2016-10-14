var main = $('main');

main.erase('display');
console.log(main.get('display')); // 'none'

main.set('display', 'block');
console.log(main.get('display')); // 'block'
