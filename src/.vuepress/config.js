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
          { text: 'tips', link: '/tips/' }
        ],
        sidebar: 'auto',
      },
    base:'/documentation/',
}