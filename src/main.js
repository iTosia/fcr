import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Notifications from '@kyvg/vue3-notification'

import VueGoogleMaps from '@fawmi/vue-google-maps'

import i18nInstance from './utils/i18n'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// app.use(router)
app.use(VueSmoothScroll, { duration: 100 })
app.use(VueGoogleMaps, {
    load: {
        key: `AIzaSyBos_2qb-umr0Ea9w5VTUPkTlTnHJKvPNU`,
    },
})
app.use(i18nInstance)

app.use(pinia)

app.use(Notifications)

app.mount('#app')
