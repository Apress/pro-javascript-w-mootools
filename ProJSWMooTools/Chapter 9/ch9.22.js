{
    // the raw expression string
    raw: '#wrapper > a.highlight, h1',

    // selector groups
    expressions: [

        // selector expression
        [
            {combinator: ' ', tag: '*', id: 'wrapper'},
            {combinator: '>', tag: 'a', classList: ['highlight'], classes: [{value: 'highlight', regexp: RegExp}]}
        ],

        // selector expression
        [
            {combinator: ' ', tag: 'h1'}
        ]
    ],

    // number of selector groups
    length: 2,

    // reversal function
    reverse: fn,

    // Slick flag
    Slick: true
}
