<html>
    <head>
    <script src="mootools.js"></script>
    <script>
        window.addEvent('domready', function(){

            // trickling model
            document.getElement('html').addEventListener('click', function(e){
                console.log('Trickling Handler');
            }, true);

            // bubbling model
            document.getElement('html').addEventListener('click', function(e){
                console.log('Bubbling Handler');
            }, false);

        });
      </script>
    </head>
    <body>
    </body>
</html>
