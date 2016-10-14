<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var img = $('hello');
                var viewable = $$('viewable');

                console.log($$(img).length); // 1
                console.log($$(img)[0] === img); // true

                console.log($(viewable)); // null
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
