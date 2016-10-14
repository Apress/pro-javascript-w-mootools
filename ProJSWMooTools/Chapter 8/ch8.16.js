<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var result = document.id('hello');

                // pass result to document.id again
                console.log(document.id(result) === result); // true

                // result's tag
                console.log(result.get('tag')); // 'img'
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
