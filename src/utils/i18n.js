import { createI18n } from "vue-i18n"
import { languages } from "@/assets/i18n"
import { defaultLocale } from "@/assets/i18n"

const localeStorageLanguage = localStorage.getItem('language')
const messages = Object.assign(languages)
const instance = createI18n({
    legacy: false,
    locale: localeStorageLanguage || defaultLocale,
    fallbackLocale: 'en',
    messages,
})

export default instance
export const i18n = instance.global