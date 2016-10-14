<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            // ensure that $ is MooTools'..
            window.$ = document.id;

            window.addEvent('domready', function(){
                console.log($('hello').get('tag')); // 'img'
            });
        </script>
    </head>

    <body>
        <img id="hello" src="hello.png">
        <p>some text.</p>
        <p>another text.</p>
        <div>
            <p>more text here</p>
        </div>
    </body>
</html>
