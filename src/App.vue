<template>
  <section class="menu menu3 cid-sFAA5oUu2Y" id="menu3-1">
    <nav class="navbar navbar-dropdown navbar-expand-lg" :class="{ 'opened': menuActive }">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-caption-wrap">
            <a class="header-logo">{{ t('menu_section.title') }}</a>
          </span>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="btn btn-primary display-4 cart-wrapper mx-4" @click="openCart()">
            <img src="@/assets/images/cart.svg" alt="cart" />
          </div>
          <button @click.prevent="menuToggle()" class="navbar-toggler" :class="{ 'collapsed': menuActive }" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div class="collapse navbar-collapse" :class="{ 'show': menuActive }" id="navbarSupportedContent">
          <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#home" v-smooth-scroll>{{ t('menu_section.items.home') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#products" v-smooth-scroll>{{ t('menu_section.items.shop') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#about" v-smooth-scroll>{{ t('menu_section.items.about') }}</a>
            </li>
          </ul>
          <div class="language-switcher btn btn-primary display-4" ref="languageSwitcher" @click.stop="toggleLanguageDropdown()">
            <div class="language-dropdown">
              <div class="language-selected">{{ selectedLanguage }}<span class="language-selected__arrow">&#9660;</span></div>
              <div class="language-dropdown__list" :class="{ 'opened' : isDropdownOpen }">
                <div class="language-dropdown__item" v-for="(language, index) in languagesList" :key="index" @click.stop="switchLang(language)">{{ language }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>

  <section class="header1 cid-sFCAOqBTxa" id="home">
    <div class="mbr-overlay"></div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ t('main_screen.title') }}</strong></h1>
          <p class="mbr-text mbr-fonts-style display-7">
            <strong>{{ t('main_screen.items.undertitle_1') }} </strong>
            <br>
            <strong>{{ t('main_screen.items.undertitle_2') }}</strong>
          </p>
          <div class="mbr-section-btn mt-3">
            <a class="btn btn-primary display-4" href="#products" v-smooth-scroll>{{ t('main_screen.items.button') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features8 cid-sFADMOwrhN" id="products">
    <div class="container">
      <div class="row justify-content-center">
        <div class="title col-md-12 col-lg-10">
          <h3 class="mbr-section-title mbr-fonts-style align-center mb-3 display-1 products-title"><strong>{{ t('our_products.title') }}</strong></h3>
          <h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5 products-undertitle">{{ t('our_products.undertitle') }}</h4>
        </div>
      </div>

      <div class="card" v-for="product in products" :key="product.id">
        <div class="card-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-md-3">
              <div class="image-wrapper">
                <img :src="product.image" :alt="`img-` + product.id" />
              </div>
            </div>
            <div class="col-12 col-md">
              <div class="card-box">
                <div class="row align-items-center">
                  <div class="col-md">
                    <h6 class="card-title mbr-fonts-style display-2"><strong>{{ t(`our_products.items.card_${product.id}.title`) }}</strong></h6>
                    <p class="mbr-text mbr-fonts-style display-7">{{ t(`our_products.items.card_${product.id}.short_description`) }}</p>
                    <div class="row d-flex flex-row align-items-center justify-content-between">
                      <div class="col">
                        <button class="btn btn-info btn-sm display-4 btn-see-more" @click="openModal(product.id)">{{ t('our_products.items.btn.see_more') }}</button>
                      </div>
                      <div class="col d-flex justify-content-end align-items-center">
                        <label for="product-type-selection" class="display-4 me-1">{{ t('our_products.items.label.volume') }}</label>
                        <select name="product-type-selection" class="form-select product-type-select" v-model="product.selectedType" @change="updatePrice(product)">
                          <option v-for="type in product.types" :key="type.id" :value="type.price">{{ type.label }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-auto d-flex flex-column align-items-end align-items-md-center">
                    <p class="price mbr-fonts-style display-2 mb-0 mb-md-3 text-md-center">{{ product.price }}</p>
                    <div class="mbr-section-btn"><button class="btn btn-primary display-4">{{ t('our_products.items.btn.add_to_cart') }}</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="features15 cid-sFANq99njx" id="about">
    <div class="container">
      <div class="content-wrapper">
        <div class="row align-items-center">
          <div class="col-12 col-lg">
            <div class="text-wrapper">
              <h6 class="card-title mbr-fonts-style display-2"><strong>{{ t('about.title') }}</strong></h6>
              <p class="mbr-text mbr-fonts-style mb-4 display-4">
                {{ t('about.items.text_1') }}<br><br> {{ t('about.items.text_2') }}
              </p>
              <div class="icons-menu d-flex align-items-center justify-content-center justify-content-lg-start">
                <a class="iconfont-wrapper" href="https://www.facebook.com/KuzminWorkshop" target="_blank">
                  <span class="p-2 mbr-iconfont socicon-facebook socicon"></span>
                </a>
                <a class="iconfont-wrapper" href="https://www.twitter.com/kuzminpost/" target="_blank">
                  <span class="p-2 mbr-iconfont socicon-twitter socicon"></span>
                </a>
                <a class="iconfont-wrapper" href="https://www.instagram.com/kuzminworkshop/" target="_blank">
                  <span class="p-2 mbr-iconfont socicon-instagram socicon"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <SliderAbout />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contacts3 map1 cid-sFAOgbarYq" id="contacts3-c">
    <div class="container">
      <div class="mbr-section-head">
        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>{{ t('contacts.title') }}</strong></h3>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="card col-12 col-md-6">
          <div class="card-wrapper">
            <div class="image-wrapper">
              <span class="mbr-iconfont mobi-mbri-phone mobi-mbri"></span>
            </div>
            <div class="text-wrapper">
              <h6 class="card-title mbr-fonts-style mb-1 display-5">
                <strong>{{ t('contacts.items.phone') }}</strong>
              </h6>
              <p class="mbr-text mbr-fonts-style display-7">
                <a href="tel:098-690-9580">098 690 9580</a>
              </p>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="image-wrapper">
              <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
            </div>
            <div class="text-wrapper">
              <h6 class="card-title mbr-fonts-style mb-1 display-5">
                <strong>{{ t('contacts.items.email') }}</strong>
              </h6>
              <p class="mbr-text mbr-fonts-style display-7">
                <a href="mailto:kuzminworkshop@gmail.com" class="text-primary">kuzminworkshop@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div class="map-wrapper col-12 col-md-6">
          <GoogleMap />
        </div>
      </div>
    </div>
  </section>

  <section class="footer3 cid-sFAOjz8nX7" id="footer3-d">
    <div class="container">
      <div class="media-container-row align-center mbr-white">
        <div class="row row-links">
          <ul class="foot-menu">
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#home" v-smooth-scroll class="text-white">{{ t('footer.menu_items.home') }}</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#products" v-smooth-scroll class="text-white">{{ t('footer.menu_items.shop') }}</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#about" v-smooth-scroll class="text-white">{{ t('footer.menu_items.about') }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__social-list row social-row">
          <div class="icons-menu d-flex align-items-center justify-content-center">
            <a class="iconfont-wrapper" href="https://www.facebook.com/KuzminWorkshop" target="_blank">
              <span class="p-2 mbr-iconfont socicon-facebook socicon"></span>
            </a>
            <a class="iconfont-wrapper" href="https://www.twitter.com/kuzminpost/" target="_blank">
              <span class="p-2 mbr-iconfont socicon-twitter socicon"></span>
            </a>
            <a class="iconfont-wrapper" href="https://www.instagram.com/kuzminworkshop/" target="_blank">
              <span class="p-2 mbr-iconfont socicon-instagram socicon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ModalProduct
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      :chosenProduct="chosenProduct"
  />

  <CartComponent
    :isCartOpened="isCartOpened"
    @close-cart="closeCart"
  />

</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { useI18n } from "vue-i18n"
import { languages } from "@/assets/i18n"
import GoogleMap from "@/components/GoogleMap.vue";
import SliderAbout from "@/components/SliderAbout.vue";
import ModalProduct from "@/components/ModalProduct.vue";
import CartComponent from "@/components/CartComponent.vue";

import product_1 from '@/assets/images/product-1.jpg';
import product_2 from '@/assets/images/product-2.jpg';

const { t, locale } = useI18n({useScope: 'global'})

const languagesList = ref([...Object.keys(languages)])
let isDropdownOpen = ref(false)

const toggleLanguageDropdown = () => isDropdownOpen.value = !isDropdownOpen.value

const switchLang = (language) => {
  locale.value = language
  localStorage.setItem('language', locale.value)
  isDropdownOpen.value = false
}

const selectedLanguage = computed(() => locale.value)

const menuActive = ref(false)
const menuToggle = () => menuActive.value = !menuActive.value

let languageSwitcher = ref(null)
const handleClickOutside = (event) => {
  isDropdownOpen.value = (event.target !== languageSwitcher.value && isDropdownOpen.value) ? false : isDropdownOpen.value;
}

const chosenProduct = ref(null)

const isModalOpened = ref(false);

const openModal = (id) => {
  chosenProduct.value = products.value.find(item => item.id === id)
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
  chosenProduct.value = null
}

const products = ref([
  {
    id: 1,
    image: product_1,
    title: t('our_products.items.card_1.title'),
    short_description: t('our_products.items.card_1.short_description'),
    description: t('our_products.items.card_1.description'),
    price: null,
    selectedType: null,
    types: [
      { id: 1, label: '50ml', price: "400 ₴" },
      { id: 2, label: '100ml', price: "500 ₴" },
      { id: 3, label: '150ml', price: "600 ₴" }
    ]
  },
  {
    id: 2,
    image: product_2,
    title: t('our_products.items.card_2.title'),
    short_description: t('our_products.items.card_2.short_description'),
    description: t('our_products.items.card_2.description'),
    price: null,
    selectedType: null,
    types: [
      { id: 1, label: '50ml', price: "400 ₴" },
      { id: 2, label: '100ml', price: "500 ₴" },
      { id: 3, label: '150ml', price: "600 ₴" }
    ]
  }
])

products.value.forEach(product => {
  if (product.types.length > 0) {
    let [firstType] = product.types
    product.selectedType = firstType?.price;
    product.price = firstType?.price;
  }
});

const updatePrice = (product) => product.price = product.selectedType

const isCartOpened = ref(false)

const openCart = () => isCartOpened.value = !isCartOpened.value
const closeCart = () => isCartOpened.value = false

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>