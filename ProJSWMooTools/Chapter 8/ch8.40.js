<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el1 = document.getElement('div');
                console.log( el1 ? 'el1 exists!' : 'el1 does not exist!'); // 'el1 exists!'

                var el2 = document.getElement('section');
                console.log( el2 ? 'el2 exists!' : 'el2 does not exist!'); // 'el2 does not exist!'
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
