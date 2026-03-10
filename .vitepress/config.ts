import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/OpenBrainPad/',
  title: 'OpenBrainPad',
  description: 'ブレインパッド社のデータサイエンティスト有志による、技術資料公開・業界向け情報発信プロジェクト',
  lang: 'ja',

  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg', type: 'image/jpeg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
    // Google Analytics 4 — 測定IDを GA4 プロパティの値に差し替えてください
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`],
  ],

  themeConfig: {
    logo: '/logo-hero.png',
    siteTitle: false,

    nav: [
      { text: '📃 資料公開', link: '/#materials' },
      { text: '📖 書籍', link: '/#book' },
      { text: '📚 社内勉強会', link: '/#study' },
      { text: '🎙 Podcast', link: '/#podcast' },
      { text: '🤝 Meetup', link: '/#meetup' },
      { text: '✍ ブログ・登壇', link: '/#blog' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Open_BrainPad' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                noResultsText: '検索結果がありません',
                resetButtonTitle: 'クリア',
                footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
              },
            },
          },
        },
      },
    },

    footer: {
      message: 'ブレインパッド社のデータサイエンティスト有志による情報発信プロジェクト',
      copyright: '© OpenBrainPad | <a href="https://twitter.com/Open_BrainPad" target="_blank">@Open_BrainPad</a>',
    },
  },
})
