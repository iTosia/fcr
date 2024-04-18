import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    persist: true,
    state: () => ({
        cart: [],
    }),
    actions: {
        addItemToCart(item) {
            this.cart.push(item)
        },
        removeCartItem(item) {
            this.cart = this.cart.filter(cartItem => cartItem.price !== item.price)
        },
    },
    getters: {
        totalCountCart: (state) => state?.cart.length,
    },
});
