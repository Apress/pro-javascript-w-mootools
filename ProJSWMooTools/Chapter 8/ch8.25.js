<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                console.log($$('#hello').length); // 1
            });
        </script>
    </head>

    <body>
        <img id="hello" class="viewable" src="hello.png">
        <p>some text.</p>
        <p>another text.</p>
        <div class="viewable">
            <p>more text here</p>
        </div>
    </body>
</html>
