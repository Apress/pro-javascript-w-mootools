<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                console.log($('wrapper').getElement('p').get('text')); // 'more text here'      
            });
        </script>
    </head>

    <body>
        <img id="hello" class="viewable" src="hello.png">
        <img src="hi.png">
        <p>some text.</p>
        <div id="wrapper" class="viewable">
            <p>more text here</p>
            <p>another text.</p>
        </div>
    </body>
</html>
