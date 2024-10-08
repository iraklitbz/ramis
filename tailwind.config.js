module.exports = {
    content: [
      './assets/**/*.scss',
      './components/*.vue,js',
      './components/**/*.vue,js',
      './pages/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js,ts',
      './*.{vue,js,ts}',
      './nuxt.config.js,ts'
    ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'hell-black': '#000',
          'dark-black': '#111',
          'black': '#111',
          'orange': '#d8491d',
          'facebook': '#3b5998',
          'twitter': '#1da1f2',
          'google': '#dd4b39',
          'instagram': '#e1306c',
          'brown': '#36332D',
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: [
      require('@tailwindcss/aspect-ratio')
    ]
  }
