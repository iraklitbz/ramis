export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
      'nuxt-icons',
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/fontaine',
      '@nuxt/image-edge',
      ['@nuxtjs/google-fonts', {
          families: {
            'Open Sans': [300, 400, 500, 700],
            download: true,
            inject: true
          }
        }]
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss'
  },
  nitro: {
    compressPublicAssets: true
  },
  runtimeConfig: {
    public: {
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_IMG_HOST: process.env.CONTENTFUL_IMG_HOST
    }
  },
  compatibilityDate: '2024-10-08'
})