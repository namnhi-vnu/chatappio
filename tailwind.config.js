/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "item-border": "rgba(255,255,255,0.1)",
                "text-chat": "rgba(255,255,255,0.5)",
            },
        },
    },
    plugins: [],
};
