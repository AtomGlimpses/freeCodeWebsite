/** @type {import('tailwindcss').Config} */

module.exports = {
    prefix: "tw-",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
        "./index.html",
    ],
    theme: {
        screens: {
            sm: '320px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            xlg: '1440px',
            xxl: '1600px',
            xxl2: '1920px',
            pageMaxWidth: '1440px'
        },
    },
    plugins: [],
    
}