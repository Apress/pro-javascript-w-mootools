<html>
    <head>
    <script src="mootools.js"></script>
    <script>
        window.addEvent('domready', function(){

            var handler = function(event){
                if (this == event.target)
                    console.log('The source of the event is ' + $(this).get('tag'));
            };

            var items = $$('img, body, html').concat(document);
            items.each(function(item){
                item.addEventListener('click', handler, false);
            });

        });
      </script>
    </head>
    <body>
        <img src="hello.png">
    </body>
</html>
