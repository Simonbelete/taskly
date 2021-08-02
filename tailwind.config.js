module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./components/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F8D57E",
        secondary: "#F6F7FB",
        "dark-primary": "#121212",
        "dark-secondary": "#dedede",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
