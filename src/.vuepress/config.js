module.exports = {
  title: '初瘦',
  description: '想当初，也瘦过。公众号：assholev0',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // theme: 'asshole',
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    avatar: '/icons/android-chrome-512x512.png',
    qr: '/qr.png',
    player: {
      audio: [
        {
          name: '双子',
          artist: '徐秉龙',
          url: ' //music.163.com/song/media/outer/url?id=557581095.mp3',
          cover: '//p1.music.126.net/8OzHoLnmHswMzQgxmXczmg==/109951163287182565.jpg'
        },
        {
          name: '白羊',
          artist: '徐秉龙',
          url: ' //music.163.com/song/media/outer/url?id=514761281.mp3',
          cover: '//p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg'
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('cursor')
      .test(/\.(cur)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        name: `assets/[name].[hash:8].[ext]`
      })
  },
  shouldPrefetch: () => false
};
