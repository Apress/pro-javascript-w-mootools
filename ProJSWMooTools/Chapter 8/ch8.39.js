<html>
    <head>
        <title>test</title>
        <script src="mootools.js"></script>
        <script>
            window.addEvent('domready', function(){
                var el = $('world');

                // without an argument
                console.log(el.getParents().length); // 6

                // with selector arguments
                console.log(el.getParents('div, p').length); // 3
                console.log(el.getParents('div').length); // 2
            });
        </script>
    </head>

    <body>
        <div>
            <div id="wrapper">
                <section id="greeting">
                    <p>
                        Hello <em id="world">World</em>!
                    </p>
                </section>
            </div>
        </div>
    </body>
</html>
