<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('img2');

                // without arguments
                console.log(el.getPrevious().get('id')); // 'img1'
                console.log(el.getNext().get('id')); // 'div2'

                // with selector arguments
                console.log(el.getPrevious('div').get('id')); // 'div1'
                console.log(el.getNext('.textual').get('id')); // 'p2'
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
