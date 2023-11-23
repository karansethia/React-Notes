/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        textFont: "Merriweather",
        headerFont: "Montserrat",
        noteFont: "Work Sans"
      },
      colors: {
        royal: "#252AD0",
        dark: "#11192C",
        lemon: "#F4F1BB",
        notePurple: "#C2BBF0"
      }
    },
  },
  plugins: [],
}