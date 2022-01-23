module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'metamask': "url('/public/assets/metamask.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}