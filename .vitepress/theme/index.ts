import DefaultTheme from 'vitepress/theme'
import ContentCard from './components/ContentCard.vue'
import FeaturedCard from './components/FeaturedCard.vue'
import ConnpassCount from './components/ConnpassCount.vue'
import PodcastCount from './components/PodcastCount.vue'
import AdminDashboard from './components/AdminDashboard.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ContentCard', ContentCard)
    app.component('FeaturedCard', FeaturedCard)
    app.component('ConnpassCount', ConnpassCount)
    app.component('PodcastCount', PodcastCount)
    app.component('AdminDashboard', AdminDashboard)
  },
}
