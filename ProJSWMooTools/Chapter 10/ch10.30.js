<html>
    <head>
    <script src="mootools.js"></script>
    <script>
        window.addEvent('domready', function(){

            var handler = function(event){
                var phase = '';
                switch (event.eventPhase){
                    case Browser.Event.CAPTURING_PHASE:
                        phase = 'Capturing';
                        break;
                    case Browser.Event.AT_TARGET:
                        phase = 'Target';
                        event.stopPropagation();
                        break;
                    case Browser.Event.BUBBLING_PHASE:
                        phase = 'Bubbling';
                }
                console.log(phase + ': ' + $(this).get('tag'));
            };

            var items = $$('img, body, html');
            items.each(function(item){
                // capturing listener
                item.addEventListener('click', handler, true);

                // bubbling listener
                item.addEventListener('click', handler, false);
            });

        });
      </script>
    </head>
    <body>
        <img src="hello.png">
    </body>
</html>
