module.exports = {
    title: 'Documentation', 
    description: '参考にしたwebサイト・サービスをまとめました。サンプルも載せています。' ,
    locales: {
      '/': {
        lang: 'ja'
      }
    },
    dest: 'docs',
    themeConfig: {
        nav: [
          { text: 'home', link: '/' },
          { text: 'web', link: '/web/' },
          { text: 'design', link: '/design/' }
        ],
        sidebar: 'auto',
      },
    base:'/documentation/',
}