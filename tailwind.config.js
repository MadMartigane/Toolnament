/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    safelist: [
        "grid-cols-2",
        "grid-cols-3",
        "grid-cols-4",
        "grid-cols-5",
        "grid-cols-6",
        "grid-cols-7",
        "grid-cols-8",
        "grid-cols-9",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

