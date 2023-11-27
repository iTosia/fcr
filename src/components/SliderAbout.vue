<template>
  <swiper
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
      <img :src="slide.img" alt="image" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { ref } from 'vue';

import img_1 from '../assets/images/mbr-10.jpg'

const swiperSlides = ref([
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_1,
  },
  {
    id: 3,
    img: img_1,
  },
])

const modules = [ Autoplay, Pagination ];
</script>