<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var els1 = document.getElements('div');
                console.log( els1.length > 0 ? 'els1 has members!' : 'els1 is empty!'); // 'els1 has members!'

                var els2 = document.getElements('section');
                console.log( els2.length > 0 ? 'els2 has members!' : 'els2 is empty!'); // 'els2 is empty!'
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
