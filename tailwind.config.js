/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        gridTemplateColumns: {
          // Simple 16 column grid
          'main-grid-structure': '60px 1fr',
          'about-grid-structure': '1fr 300px',
          'section-title-grid-structure': '1fr 1fr',
        },
        colors: {
          'neon': "#0aff9d",
          'slight-gray':'#ebecf3',
          "coral-red": "#FF6452",
          "slate-gray": "#6D6D6D",
          "pale-blue": "#F5F6FF",
          "white-400": "rgba(255, 255, 255, 0.80)",
        },
        before: {
          content: "''",
          width: "0.5rem",
          height: "0.5rem",
          display: "inline-block",
          marginRight: "0.5rem",
          backgroundColor: "#0aff9d",
          borderRadius: "50%",
        },
        border:{
          '1':'1px',
        },
        scale:{
          '80':'0.8',
          '85':'0.85',
          '92':'0.92',
        },
      },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}