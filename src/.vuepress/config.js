module.exports = {
    title: 'ページタイトル', 
    description: 'ここにディスクリプションのテキスト' ,
    locales: {
      '/': {
        lang: 'ja'
      }
    },
    dest: 'docs',
    themeConfig: {
        nav: [
          { text: 'ほーむ', link: '/' },
          { text: 'あばうと', link: '/about/' }
        ],
        sidebar: 'auto',
      },
    base:'/documentation/',
}