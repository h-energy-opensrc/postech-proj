module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  css: [ 'tachyons' ],
  plugins: [
    // { src: "~plugins/vue2-editor.js", ssr: false },
    { src: '~/plugins/fbConn.js', ssr: true },
    // { src: '~/plugins/plotlyPlug.js', ssr: false }
  ],
}
