//tailwind border color plugin powered by
//https://github.com/tailwindcss/tailwindcss/pull/560#issuecomment-503222143
var _ = require("lodash");
var flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      whitelist: [
        "bg-opacity-0",
        "bg-opacity-25",
        "bg-opacity-50",
        "bg-opacity-75",
        "bg-opacity-100",
        "mode-dark",
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E6F4F7",
          200: "#C0E5EB",
          300: "#99D5DF",
          400: "#4DB5C8",
          500: "#0195B0",
          600: "#01869E",
          700: "#01596A",
          800: "#00434F",
          900: "#002D35",
        },
      },
      height: {
        "128": "32rem",
        "half-screen": "50vh",
      },
      backgroundOpacity: {
        "0": "0",
        "10": "0.1",
        "20": "0.2",
        "30": "0.3",
        "40": "0.4",
        "50": "0.5",
        "60": "0.6",
        "70": "0.7",
        "80": "0.8",
        "90": "0.9",
        "100": "1",
      },
    },
    fontFamily: {
      sans: [
        '"Maven Pro"',
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: ["Roboto"],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    zIndex: {
      "-10": "-10",
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "25": 25,
      "50": 50,
      "75": 75,
      "100": 100,
      "1000": 1000,
      auto: "auto",
    },
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
      "2xl-strong": "0 25px 50px -12px rgba(0, 0, 0, .5)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, .3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    function({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme("borderColor"));

      const utilities = _.flatMap(
        _.omit(colors, "default"),
        (value, modifier) => ({
          [`.${e(`border-t-${modifier}`)}`]: {
            borderTopColor: `${value}`,
          },
          [`.${e(`border-r-${modifier}`)}`]: {
            borderRightColor: `${value}`,
          },
          [`.${e(`border-b-${modifier}`)}`]: {
            borderBottomColor: `${value}`,
          },
          [`.${e(`border-l-${modifier}`)}`]: {
            borderLeftColor: `${value}`,
          },
        })
      );

      addUtilities(utilities, variants("borderColor"));
    },
  ],
  corePlugins: {
    container: false,
  },
};
