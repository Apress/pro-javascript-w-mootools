<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var result = $$('p').get('text');
                console.log(result); // ['some text.', 'another text.', 'more text here']
                console.log(typeOf(result)); // 'array'
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
