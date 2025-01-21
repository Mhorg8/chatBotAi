/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
        "./public/**/*.html",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: '3rem'
            }
        },
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {}
        }
    },
    plugins: [require("tailwindcss-animate")],
}

