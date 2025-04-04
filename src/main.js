import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Import Leaflet CSS for the map component
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(store)
app.mount('#app')
