var greet = function(name, greeting){

    // check if arguments are defined;
    // if not, use a default value..
    name = name || 'Mark';
    greeting = greeting || 'Hello';

    console.log([greeting, name].join(' '));
};

greet('Tim', 'Hi'); // 'Hi Tim'
greet('Tim');       // 'Hello Tim'
greet();            // 'Hello Mark'

