export default {
    "space": [
        0,
        4,
        8,
        16,
        24,
        32,
        40
    ],
    breakpoints: ['22.5em','37.5em', '60em', '83em',],
    sizes: {
        maxWidth: '917px',
        maxWidthCentered: '709px',
    },
    "fonts": {
        body: '"Apercu-Light", system-ui, -apple-system, sans-serif',
        bodyItalic: '"apercu-light-italic", sans-serif',
        bodyBold: '"apercu-bold", sans-serif',
        bodyBoldItalic: '"apercu-bold-italic", sans-serif',
        heading: '"Tiempos Headline", Georgia, serif',
        monospace: 'monospace',
        alternate: '"Apercu", system-ui, -apple-system, sans-serif',
    },
    "fontSizes": [
        14,
        16,
        18,
        22,
        24,
        34,
        48,
        60,
        96
    ],
    "fontWeights": {
        body: 'normal',
        heading: 300,
        bold: 800
    },
    "lineHeights": {
        body: 1.414,
        heading: 1.333,
        subtitle: 1.125
    },
    "text": {
        "caption": {
            fontWeight: 'bold',
            fontSize: 0,
        },
        "caps": {
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },
        "subsans": {
            fontFamily: '"Apercu Pro", system-ui, -apple-system, sans-serif',
            lineHeight: 1.125,
            fontWeight: 800,
            fontSize: 1,
        },
        "subserif": {
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 300,
            fontSize: 4,
        },
    },
    "colors": {
        text: '#000',
        background: '#fff',
        primary: '#e64150',
        secondary: '#055aa0',
        muted: '#00a79f',
        "raconteurMidGrey": "#979797",
        "raconteurSoftGrey": "#f1f1f1",
        "raconteurPink": "#f08791",
        "raconteurAqua": "#78c8d7",
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#e64150',
                secondary: '#055aa0',
                muted: '#111',
            },
        }
    },
    "styles": {
        root: {
            fontFamily: '"Apercu Pro", system-ui, -apple-system, sans-serif',
            lineHeight: 1.414,
            fontWeight: 400,
            fontSize: 1
        },
        h1: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 9
        },
        h2: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 8
        },
        h3: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 7
        },
        h4: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 6
      },
        h5: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 5
        },
        h6: {
            color: '#000',
            fontFamily: '"Tiempos Headline", Georgia, serif',
            lineHeight: 1.333,
            fontWeight: 800,
            fontSize: 3
        },
        p: {
            color: '#000',
            fontFamily: '"Apercu Pro", system-ui, -apple-system, sans-serif',
            fontWeight: 400,
            lineHeight: 1.333,
            fontSize: 3
        },
        a: {
            color: '#e64150',
        },
        blockquote: {

        },
        small: {
            fontSize: 0
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        img: {
            maxWidth: '100%'
        }
  }
};
