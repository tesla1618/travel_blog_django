/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tesla: {
          primary: "#1f2937",
          secondary: "#9ca3af",
          accent: "#111827",
          neutral: "#0b1205",
          "base-100": "#d1d5db",
          info: "#7dd3fc",
          success: "#22c55e",
          warning: "#fcd34d",
          error: "#de003c",
        },
      },
    ],
  },
};
