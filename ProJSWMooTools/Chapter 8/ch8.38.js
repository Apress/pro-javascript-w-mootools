<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('world');

                // without an argument
                console.log(el.getParent().get('tag')); // 'p'

                // with selector arguments
                console.log(el.getParent('section').get('id')); // 'greeting'
                console.log(el.getParent('div').get('id')); // 'wrapper'
            });
        </script>
    </head>

    <body>
        <div id="wrapper">
            <section id="greeting">
                <p>
                    Hello <em id="world">World</em>!
                </p>
            </section>
        </div>
    </body>
</html>
