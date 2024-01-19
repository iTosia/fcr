<template>
  <div class="shopping-cart" :class="{ 'opened' : isCartOpened }">
    <div class="shopping-cart__top">
      <p class="shopping-cart__name display-4">Shopping cart</p>
      <button class="close-cart" @click="closeCart()">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({useScope: 'global'})

const props = defineProps({
  isCartOpened: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close-cart"]);

const closeCart = () => emit('close-cart')

</script>