/* @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                pes_black: '#131313',
                pes_white: '#fbfbfb',
                pes_logoblue: '#064ca9',
                pes_orange: '#f8903f',
                pes_lightblue: '#007aff',
                pes_skyblue: '#bce0ff',
                pes_darkblue: '#2f327d',
                pes_darkbluegray: '#424361',
                pes_lightgray: '#d9d9d9',
                pes_mediumgray: '#979797',
                pes_darkgray: '#5c5c5c',
                pes_darkgray50pc: 'rgba(151, 151, 151, 50)',
                pes_successgreen: '#35d572',
                pes_lightbluegray: '#b2b3cf',
            },
            fontSize: {
                xs: '.625rem',
                sm: '.813rem',
                base: '1rem',
                lg: '1.25rem',
                xl: '1.563rem',
                '2xl': '1.938rem',
                '3xl': '2.438rem',
                '4xl': '3.063rem',
                '5xl': '3.813rem',
                '6xl': '4.75rem',
                '7xl': '5.938rem',
                '8xl': '7.438rem',
                '9xl': '9.313rem',
                '10xl': '11.625rem',
                '11xl': '14.563rem',
                '12xl': '18.188rem',
            },
        },
        screens: {
            xs: '360px',
            sm: '480px',
            md: '768px',
            lg: '1080px',
            xl: '1440px',
            '2xl': '1920px',
        },
    },
    plugins: [require('daisyui')],
}
