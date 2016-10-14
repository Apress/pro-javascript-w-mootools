<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('wrapper');

                // without arguments
                console.log(el.getChildren().length); // 4

                // with selector argument
                console.log(el.getChildren('img').length); // 2

                // getChildren versus getElements
                console.log(el.getElements('*').length); // 6
            });
        </script>
    </head>

    <body>
        <div id="wrapper">
            <div id="hello">
                <p>Hello World!</p>
            </div>
            <img src="img1.png">
            <div id="hi">
                <p>Hi Universe!</p>
            </div>
            <img src="img2.png">
        </div>
    </body>
</html>
