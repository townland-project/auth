module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'metamask': "url('/public/assets/metamask.svg')",
        'back': "url('/public/assets/back.svg')",
        'forward': "url('/public/assets/forward.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}