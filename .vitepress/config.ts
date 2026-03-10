import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/OpenBrainPad/',
  title: 'OpenBrainPad',
  description: 'ブレインパッド社のデータサイエンティスト有志による、技術資料公開・業界向け情報発信プロジェクト',
  lang: 'ja',

  head: [
    ['link', { rel: 'icon', href: '/OpenBrainPad/favicon.jpg', type: 'image/jpeg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],

    // OGP (Open Graph)
    ['meta', { property: 'og:type',        content: 'website' }],
    ['meta', { property: 'og:site_name',   content: 'OpenBrainPad' }],
    ['meta', { property: 'og:title',       content: 'OpenBrainPad' }],
    ['meta', { property: 'og:description', content: 'ブレインパッドのデータサイエンティスト有志による技術資料公開・業界向け情報発信プロジェクト' }],
    ['meta', { property: 'og:url',         content: 'https://brainpad.github.io/OpenBrainPad/' }],
    ['meta', { property: 'og:image',       content: 'https://brainpad.github.io/OpenBrainPad/ogp.png' }],
    ['meta', { property: 'og:image:type',  content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height',content: '630' }],
    ['meta', { property: 'og:locale',      content: 'ja_JP' }],

    // Twitter Card
    ['meta', { name: 'twitter:card',        content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site',        content: '@Open_BrainPad' }],
    ['meta', { name: 'twitter:title',       content: 'OpenBrainPad' }],
    ['meta', { name: 'twitter:description', content: 'ブレインパッドのデータサイエンティスト有志による技術資料公開・業界向け情報発信プロジェクト' }],
    ['meta', { name: 'twitter:image',       content: 'https://brainpad.github.io/OpenBrainPad/ogp.png' }],

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
