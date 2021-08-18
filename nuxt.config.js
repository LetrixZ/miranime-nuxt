import axios from 'axios'

const dynamicRoutes = async () => {
  const routes = await axios
    .get('http://localhost:4000/all')
    .then((res) => res.data.map((anime) => `/anime/${anime.slug}`))
  return routes
}

export default {
  // target: 'server',
  // ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'miranime-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@node_modules/bootstrap/dist/css/bootstrap.min.css'
    '@styles/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0'
  },

  generate: {
    routes: dynamicRoutes
  },
  /*serverMiddleware: [
    // Will register file from project api directory to handle /api/!* requires
    { path: '/api', handler: '~/api/index.js' }
  ]*/
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ]
}
