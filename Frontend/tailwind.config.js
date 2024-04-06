/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        rosybrown: "#926b73",
        plum: "#ffc0f0",
        thistle: "rgba(253, 203, 241, 0)",
        gray: {
          "100": "rgba(255, 255, 255, 0.54)",
          "200": "rgba(255, 255, 255, 0)",
        },
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        lobster: "Lobster",
      },
      borderRadius: {
        "21xl": "40px",
        "31xl": "50px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
