/*@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'custom': '32px',
        '64px': '64px',
        '40px':'40px',
        '24px':'24px',
        '12px':'12px',
        '14px':'14px',
        '16px': '16px'
      },
      colors: {
        'custom-gray': '#23252B',
        'gray':'#617587',
        'Background-color':"#E6E9F2",
        'bg-color':'#E6E9F2',
        'price':'#617587',
        'label':'#D4D3EB',
        'blue':'#29627F'
      },
      width: {
        '437px': '437px',
        '68px':'68px',
        '248px':'248px',
        '176px':'176px',
        '130px':'130px'
      },
      height: {
        '27px':'27px',
        '411px': '411px',
        '68px':'68px',
        '67px':'67px',
        '227px':'227px',
        '80px':'120px'
      },
    },
  },
  plugins: [],
}

