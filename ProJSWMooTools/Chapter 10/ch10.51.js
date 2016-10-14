<html>
    <head>
    <script src="mootools.js"></script>
    <script>
        window.addEvent('domready', function(){
            var items = $$('img, body, html');
            items.addEvent('click', function(event){
                console.log('Clicked: ' + this.get('tag'));
            });
        });
      </script>
    </head>
    <body>
        <img src="hello.png">
    </body>
</html>
