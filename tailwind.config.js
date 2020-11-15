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
  },
  variants: {},
  plugins: [],
};
