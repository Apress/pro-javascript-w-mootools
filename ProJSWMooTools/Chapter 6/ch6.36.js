// original method
String.implement('method', function(){
	console.log('Original');
}.protect());

'hello'.method(); // 'Original'

// override original
String.implement('method', function(){
	console.log('Override');
});

'hello'.method(); // 'Original'
