<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){

                // all images with the class viewable..
                console.log($$('img.viewable').length); // 1

                // all images that have the src attribute
                console.log($$('img[src]').length); // 2

                // all images with the src attribute 'hi.png'
                console.log($$('img[src="hi.png"]').length); // 1

                // all elements that have class attributes
                console.log($$('[class]').length); // 2

                // all paragraphs and images
                console.log($$('p, img').length); // 5

            });
        </script>
    </head>

    <body>
        <img id="hello" class="viewable" src="hello.png">
        <img src="hi.png">
        <p>some text.</p>
        <p>another text.</p>
        <div class="viewable">
            <p>more text here</p>
        </div>
    </body>
</html>
