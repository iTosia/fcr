import { defineStore } from "pinia"
import { i18n } from './utils/i18n'
import product_1 from '@/assets/images/product-1.jpg'
import product_2 from '@/assets/images/product-2.jpg'

export const useStore = defineStore("store", {
    persist: true,
    state: () => ({
        availableProducts: [
            {
                id: 1,
                title: i18n.t('our_products.items.card_1.title'),
                description: i18n.t('our_products.items.card_1.description'),
                image: product_1,
                price: null,
                selectedType: null,
                types: [
                    { id: 1, label: '50ml', price: "400₴" },
                    { id: 2, label: '100ml', price: "500₴" },
                    { id: 3, label: '150ml', price: "600₴" }
                ]
            },
            {
                id: 2,
                title: i18n.t('our_products.items.card_2.title'),
                description: i18n.t('our_products.items.card_2.description'),
                image: product_2,
                price: null,
                selectedType: null,
                types: [
                    { id: 1, label: '50ml', price: "700₴" },
                    { id: 2, label: '100ml', price: "800₴" },
                    { id: 3, label: '150ml', price: "900₴" }
                ]
            }
        ],
        cart: [],
    }),
    actions: {
        addItemToCart(item) {
            const cartItem = this.cart.find(cartItem => cartItem.id === item.id && cartItem.label === item.label)

            if (cartItem) {
                cartItem.quantity += 1
            } else {
                this.cart.push(item)
            }
        },
        removeCartItem(item) {
            const cartItem = this.cart.find(cartItem => cartItem.id === item.id && cartItem.label === item.label)

            if (cartItem) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1
                } else {
                    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id || cartItem.label !== item.label)
                }
            }
        },
        updateTranslations() {
            this.availableProducts = this.availableProducts.map(product => ({
                ...product,
                title: i18n.t(`our_products.items.card_${product.id}.title`),
                description: i18n.t(`our_products.items.card_${product.id}.description`)
            }))

            this.cart = this.cart.map(item => ({
                ...item,
                title: i18n.t(`our_products.items.card_${item.id}.title`)
            }))
        }
    },
    getters: {
        totalCountCart: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    },
});
