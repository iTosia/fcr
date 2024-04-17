<template>
  <swiper
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
      <img :src="`src/assets/images/product-${slide.id}.jpg`" :alt="`slider-img-` + slide.id" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { ref } from 'vue';

const swiperSlides = ref([ { id: 1 }, { id: 1 }, { id: 1 } ])

const modules = [ Autoplay, Pagination ];
</script>