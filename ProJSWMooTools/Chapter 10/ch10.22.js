<html>
    <head>
    <script src="mootools.js"></script>
    <script>
        window.addEvent('domready', function(){
            // the image
            $$('img').attachEvent('onclick', function(){
                console.log('img');
            });

            // the body element
            $$('body').attachEvent('onclick', function(){
                console.log('body');
            });

            // the html element
            $$('html').attachEvent('onclick', function(){
                console.log('html');
            });

            // the document element
            $$(document).attachEvent('onclick', function(){
                console.log('document');
            });
        });
    </head>
    <body>
        <img src="hello.png">
    </body>
</html>
