module.exports = {
  purge: {
    enabled: false,
    content: [
      "./pages/**/*.js",
      "./components/**/*.js",
      "./components/**/**/*.js",
      "./components/**/**/**/*.js",
      "./components/**/**/**/**/*.js",
      "./components/**/**/**/**/**/*.js",
      "./components/**/**/**/**/**/**/*.js",
      "./components/*.js",
      "./pages/*.js",
      "./screens/*.js",
    ],
  },
  theme: {
    extend: {
      spacing: {
        lg: "24px",
      },
    },
    maxWidth: {
      inter: "840px",
    },
  },
  variants: {},
  plugins: [],
};
