<html>
    <head>
        <title>test</title>
    </head>

    <body>
        <img class="viewable" src="hello.png">
        <p>some text.</p>
        <p>another text.</p>
        <div class="viewable">
            <p>more text here</p>
        </div>
        <script>
            console.log(document.getElementsByTagName('p').length); // 3
            console.log(document.getElementsByClassName('viewable').length); // 2
        </script>
    </body>
</html>
