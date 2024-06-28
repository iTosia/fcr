<template>
  <div class="shopping-cart" :class="{ 'opened' : isCartOpened }">
    <div class="shopping-cart__top">
      <p class="shopping-cart__name display-4">{{ t('cart.title') }}</p>
      <button class="close-cart" @click="closeCart()">&times;</button>
    </div>
    <div class="shopping-cart__empty" v-if="!isCartNotEmpty">
      <h2>{{ t('cart.empty_cart_info') }}</h2>
    </div>
    <div class="shopping-cart__items" v-else>
      <div class="shopping-cart-item" v-for="item in store.cart" :key="item">
        <img class="shopping-cart-item-img" :src="item.image" :alt="`item-img-${item.id}`" />
        <div class="shopping-cart-item-info">
          <h3 class="display-4">{{ t('cart.item.title') }}&nbsp;{{ item.title }}</h3>
          <p class="display-4">{{ t('cart.item.price') }}&nbsp;{{ item.price }}</p>
          <p class="display-4">{{ t('cart.item.selected_label') }}&nbsp;{{ getItemLabel(item) }}</p>
        </div>
        <button class="shopping-cart-item-remove" type="button" @click="removeCartItem(item)">
          <svg aria-hidden="true" fill="none">
            <use class="icon-trash" xlink:href="../assets/icons/icons.svg#trash" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "@/piniaStore";

const store = useStore();

const { t } = useI18n({useScope: 'global'})

defineProps({
  isCartOpened: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close-cart"]);

const closeCart = () => emit('close-cart')

const isCartNotEmpty = computed(() => store.totalCountCart > 0)

console.log(store.cart)

const getItemLabel = (item) => {
  let type = item.types.find(type => type.price === item.price)
  return type.label
}

const removeCartItem = (item) => store.removeCartItem(item)

</script>