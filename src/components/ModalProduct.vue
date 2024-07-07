<template>
  <div class="modal-container">
    <div class="modal-close" @click.stop="closeModal()"><span>&times;</span></div>
    <div class="modal-body">
      <div class="modal-product-image">
        <img :src="image" :alt="`img-` + id" />
      </div>
      <h3 class="modal-product-title card-title mbr-fonts-style display-2 mt-3"><strong>{{ title }}</strong></h3>
      <p class="modal-product-description mbr-text mbr-fonts-style display-7 mb-0">{{ description }}</p>
    </div>
    <div class="modal-footer">
      <div class="mbr-section-btn">
        <button class="btn btn-primary display-4" @click.stop="closeModal()">{{ t('modal_product.btn.close_modal') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n"

const { t } = useI18n({useScope: 'global'})

defineProps({
  image: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(["modal-close"]);

const closeModal = () => emit('modal-close')

</script>
