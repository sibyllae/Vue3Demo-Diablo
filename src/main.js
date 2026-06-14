import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createI18n } from './composables/useI18n.js'

const app = createApp(App)
app.use(createI18n())
app.mount('#app')
