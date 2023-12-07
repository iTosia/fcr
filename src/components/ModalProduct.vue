<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-close" @click.stop="closeModal()"><span>&times;</span></div>
        <div class="modal-footer">
          <div class="mbr-section-btn">
            <button class="btn btn-primary display-4" @click.stop="closeModal()">{{ t('modal_product.btn.close_modal') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, ()=> emit('modal-close'))

const closeModal = () => emit('modal-close')
</script>