/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./landing page/**/*.html"],
  theme: {
    extend: {
      textColor:{
        light:{
          mainColor: '#64bcf4',
          hoverColor: '#5bacdf',
          darkOne: '#312f3a',
          darkTwo: '#45424b',
          lightOne: '#919191',
          lightTwo: '#aaa',
        },
      },
      backgroundColor:{
        background:{
          bgColor: '#64bcf4',
        },
      },
    },
  },
  plugins: [],
}

