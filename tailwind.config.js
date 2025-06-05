module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#000000',
        color2: '#FFC0CB',
        color3: '#ADB2D4',
        color4: '#213448',
      },
      blur: {
        soft: '120px',
      },
      animation: {
        blob: 'blob 5s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 60%',
            transform: 'scale(2) rotate(0deg) translate(10%, 10%)',
          },
          '100%': {
            borderRadius: '88% 10% 22% 58% / 73% 56% 34% 77%',
            transform: 'scale(2) rotate(180deg) translate(10%, -10%)',
          },
        },
      },
    },
  },
  plugins: [],
};
