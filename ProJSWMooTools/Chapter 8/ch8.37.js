<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('wrapper');

                // without arguments
                console.log(el.getFirst().get('id')); // 'hello'
                console.log(el.getLast().get('id')); // 'img2'

                // with selector argument
                console.log(el.getFirst('img').get('id')); // 'img1'
                console.log(el.getLast('div').get('id')); // 'hi'
            });
        </script>
    </head>

    <body>
        <div id="wrapper">
            <div id="hello">
                <p>Hello World!</p>
            </div>
            <img id="img1" src="img1.png">
            <div id="hi">
                <p>Hi Universe!</p>
            </div>
            <img id="img2" src="img2.png">
        </div>
    </body>
</html>
