<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('img2');

                // without arguments
                console.log(el.getSiblings().length); // 5

                // with selector arguments
                console.log(el.getSiblings('.textual').length); // 2
            });
        </script>
    </head>

    <body>
        <p id="p1" class="textual">Hello!</p>
        <div id="div1"></div>
        <img id="img1" class="viewable" src="hello.png">
        <img id="img2" src="hi.png">
        <div id="div2"></div>
        <p id="p2" class="textual">Hi!</p>
    </body>
</html>
