/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "24rem",
        md: "48rem",
        lg: "56rem",
        xl: "64rem",
        ll: "80rem",
        mm: "90rem",
        nn: "102rem",
        op: "160rem",
      },
    },
  },
  plugins: [],
};
