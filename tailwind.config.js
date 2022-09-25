module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'brown': '#36332d',
            'gray-100': '#888',
            'white': '#fff',
            'black': '#222'
        }
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}
