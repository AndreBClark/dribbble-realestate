const tint = require('polished/lib/color/tint');
const darken = require('polished/lib/color/darken');
module.exports = {
    theme: {
        extend: {
            screens: {
                "2xl": "1440px"
            },
            fontFamily: {
                display: '"Playfair Display"',
                sans: '"Nunito Sans"'
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem'
            },
            colors: {
                primary: "#b2b6c6",
                secondary: "#181718",
                accent: "#a88439",
            }
        }
    },
    variants: {},
    plugins: []
}