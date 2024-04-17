<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" ref="modalProduct">
          <div class="modal-close" @click.stop="closeModal()"><span>&times;</span></div>
          <div class="modal-body">
            <div class="modal-product-image">
              <img :src="`src/assets/images/product-${chosenProduct.id}.jpg`" :alt="`img-` + chosenProduct.id" />
            </div>
            <h3 class="modal-product-title card-title mbr-fonts-style display-2 mt-3"><strong>{{ t(`our_products.items.card_${chosenProduct.id}.title`) }}</strong></h3>
            <p class="modal-product-description mbr-text mbr-fonts-style display-7 mb-0">{{ t(`our_products.items.card_${chosenProduct.id}.description`) }}</p>
          </div>
          <div class="modal-footer">
            <div class="mbr-section-btn">
              <button class="btn btn-primary display-4" @click.stop="closeModal()">{{ t('modal_product.btn.close_modal') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from '@vueuse/core'
import { useI18n } from "vue-i18n"

const { t } = useI18n({useScope: 'global'})

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true,
  },
  chosenProduct: {
    type: Object,
  }
});

const emit = defineEmits(["modal-close"]);

const modalProduct = ref(null)
onClickOutside(modalProduct, ()=> emit('modal-close'))

const closeModal = () => emit('modal-close')
</script>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>