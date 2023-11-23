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

const swiperSlides = ref([
  {
    id: 1,
    img: `src/assets/images/mbr-10.jpg`,
  },
  {
    id: 2,
    img: `src/assets/images/mbr-10.jpg`,
  },
  {
    id: 3,
    img: `src/assets/images/mbr-10.jpg`,
  },
])

const modules = [ Autoplay, Pagination ];
</script>