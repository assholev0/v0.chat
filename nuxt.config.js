module.exports = {
  head: {
    title: '初瘦',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '想当初，也瘦过。' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.png' }
    ]
  },
  build: {
    extractCSS: true
  },
  loading: {
    color: '#1976d2'
  },
  generate: {
    fallback: true
  },
  modules: [
    'nuxtpress'
    // { src: '~/nuxtpress' }
  ]
};
