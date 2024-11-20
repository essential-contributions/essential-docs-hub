// docs/.vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import ExternalContent from '../components/ExternalContent.vue'
import './style.css' // Explicitly import style.css


export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('ExternalContent', ExternalContent)
  }
}
