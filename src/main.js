import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'

import VueGoogleMaps from '@fawmi/vue-google-maps'

import { languages } from "@/assets/i18n"
import { defaultLocale } from "@/assets/i18n"
import { createI18n } from "vue-i18n"

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const localeStorageLanguage = localStorage.getItem('language')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localeStorageLanguage || defaultLocale,
    fallbackLocale: 'en',
    messages,
})

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
app.use(i18n)

app.use(pinia)

app.mount('#app')
