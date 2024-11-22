/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    colors: {
      loan: " #17A9E2",
      lightBlue: "#cff0fc",
      white: "#fff",
      black: "#000",
      gray: " #646567",
      lightGray: "#E5E5E5",
    },
  },
  plugins: [],
};
