export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["'Pacifico'", "cursive"], // ✅ Wrap in quotes
                title: ["'Raleway'", "sans-serif"],
                body: ["'Rubik'", "sans-serif"],
            },
        },
    },
    plugins: [],
};
