import en from 'vuetify/src/locale/en'
import ja from 'vuetify/src/locale/ja'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: process.env.PORT || 8000,
    host: process.env.HOST || 'localhost',
  },
  /*
   * @see https://nuxtjs.org/docs/configuration-glossary/configuration-env
   * **/
  env: {
    PROXY: process.env.PROXY || 'false',
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    RECAPTCHA_LANG: process.env.RECAPTCHA_LANG,
    LOCALE: process.env.LOCALE || 'ja',

    PASSWORD: process.env.PASSWORD,
    USER_NAME: process.env.USER_NAME,
    USER_NAME_MINORITY: process.env.USER_NAME_MINORITY,
    PASSWORD_MINORITY: process.env.PASSWORD_MINORITY
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s${process.env.npm_package_title}`,
    title: process.env.npm_package_titl,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/theme.scss'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
        optionsPath: '~/configs/vuetify.ts',
        treeShake: true,
        defaultAssets: {
          font: false,
        },
        lang: {
          locales: { en, ja },
          current: 'ja',
        },
      },
    ],
    '@nuxtjs/dotenv',
  ],
  dotenv: {
    systemvars: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/Boomar',
  },
}
