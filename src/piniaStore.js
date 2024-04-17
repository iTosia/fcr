import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    persist: true,
    state: () => ({
        cart: [],
    }),
    // actions: {
    //     addItemToCart() {
    //         this.cart.push({ id: 1 })
    //     },
    // },
    getters: {
        totalCountCart: (state) => state?.cart.length,
    },
});
