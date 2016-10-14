<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                console.log($('para1').get('text')); // 'some text.'
            });
        </script>
    </head>

    <body>
        <p id="para1">some text.</p>
        <p>another text.</p>
        <div class="viewable">
            <p>more text here</p>
        </div>
    </body>
</html>
