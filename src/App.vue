<template>
  <section class="menu menu3 cid-sFAA5oUu2Y" id="menu3-1">
    <nav class="navbar navbar-dropdown navbar-expand-lg" :class="{ 'opened': menuActive }">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-caption-wrap">
            <a class="navbar-caption text-primary display-5" href="#" target="_blank">FCR</a>
          </span>
        </div>
        <button @click.prevent="menuToggle()" class="navbar-toggler" :class="{ 'collapsed': menuActive }" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': menuActive }" id="navbarSupportedContent">
          <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#" target="_blank">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#" target="_blank">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link text-primary display-7" href="#about" v-smooth-scroll>About</a>
            </li>
          </ul>
          <div class="icons-menu">
            <a class="iconfont-wrapper" href="#" target="_blank">
              <span class="p-2 mbr-iconfont socicon-facebook socicon"></span>
            </a>
            <a class="iconfont-wrapper" href="#" target="_blank">
              <span class="p-2 mbr-iconfont socicon-twitter socicon"></span>
            </a>
            <a class="iconfont-wrapper" href="#" target="_blank">
              <span class="p-2 mbr-iconfont socicon-instagram socicon"></span>
            </a>
          </div>
          <div class="navbar-buttons mbr-section-btn"><a class="btn btn-primary display-4" href="#" target="_blank">Shop Now</a></div>
        </div>
      </div>
    </nav>
  </section>

  <section class="header1 cid-sFCAOqBTxa" id="header1-i">
    <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(250, 250, 250);"></div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Family Cosmetic's Recipe</strong></h1>
          <p class="mbr-text mbr-fonts-style display-7"><strong>Сімейний бренд косметики для волосся і не тільки. </strong><br><strong>Інновації. Екологічність. Турбота.</strong></p>
          <div class="mbr-section-btn mt-3">
            <a class="btn btn-primary display-4" href="#">Shop Now</a>
            <a class="btn btn-primary-outline display-4" href="#about" v-smooth-scroll>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="content4 cid-sFADQQfNeA" id="content4-6">
    <div class="container">
      <div class="row justify-content-center">
        <div class="title col-md-12 col-lg-10">
          <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-1"><strong>Наші товари</strong></h3>
          <h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
      </div>
    </div>
  </section>

  <section class="features8 cid-sFADMOwrhN" id="features9-4">
    <div class="container">
      <div class="card">
        <div class="card-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-md-4">
              <div class="image-wrapper">
                <img src="@/assets/images/cream150-2.jpg" alt="Mobirise Website Builder">
              </div>
            </div>
            <div class="col-12 col-md">
              <div class="card-box">
                <div class="row">
                  <div class="col-md">
                    <h6 class="card-title mbr-fonts-style display-2"><strong>Крем 150</strong></h6>
                    <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. Vestibulum nec massa a nisl condimentum mattis. Mauris semper risus dui, vitae pulvinar sapien rutrum in. Cras risus ante, porta vel volutpat vel.<br></p>
                  </div>
                  <div class="col-md-auto">
                    <p class="price mbr-fonts-style display-2">600 ₴</p>
                    <div class="mbr-section-btn"><a href="#" target="_blank" class="btn btn-primary display-4">Купити</a></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-md-4">
              <div class="image-wrapper">
                <img src="@/assets/images/cream150-3.jpg" alt="Mobirise Website Builder">
              </div>
            </div>
            <div class="col-12 col-md">
              <div class="card-box">
                <div class="row">
                  <div class="col-md">
                    <h6 class="card-title mbr-fonts-style display-2"><strong>Крем 150 S</strong></h6>
                    <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. Vestibulum nec massa a nisl condimentum mattis. Mauris semper risus dui, vitae pulvinar sapien rutrum in. Cras risus ante, porta vel volutpat vel.</p>
                  </div>
                  <div class="col-md-auto">
                    <p class="price mbr-fonts-style display-2">600 ₴</p>
                    <div class="mbr-section-btn"><a href="#" target="_blank" class="btn btn-primary display-4">Купити</a></div>
                  </div>
                  <div></div>
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
              <h6 class="card-title mbr-fonts-style display-2"><strong>Трошки про Нас</strong></h6>
              <p class="mbr-text mbr-fonts-style mb-4 display-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. Vestibulum nec massa a nisl condimentum mattis. Mauris semper risus dui, vitae pulvinar sapien rutrum in. Cras risus ante, porta vel volutpat vel, pulvinar in magna. Donec lacinia in mi eget pharetra.&nbsp;<br><br>Morbi id commodo risus. Donec lobortis nisl sit amet semper pulvinar. Sed quis lectus non eros congue consectetur vehicula sed tortor. Mauris laoreet, ex non aliquam tincidunt, nulla neque viverra dui, at porta quam diam sit amet nulla. Nullam suscipit diam sagittis, tempor nisi sit amet, blandit odio.&nbsp;</p>
              <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4" href="#" target="_blank">Learn more</a></div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="image-wrapper">
              <img src="@/assets/images/mbr-10.jpg" alt="Mobirise Website Builder">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="clients2 cid-sFAOcdRzJX" id="clients2-b">
    <div class="container">
      <div class="row justify-content-center">
        <div class="card col-12 col-md-6 col-lg-4">
          <div class="card-wrapper">
            <div class="img-wrapper">
              <img src="@/assets/images/1.png" alt="Mobirise Website Builder">
            </div>
            <div class="card-box align-center">

              <h5 class="card-title mbr-fonts-style mb-3 display-5">
                <strong>Our Partner</strong>
              </h5>
              <p class="mbr-text mbr-fonts-style mb-4 display-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. </p>
              <div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4" href="#" target="_blank">Learn More</a></div>
            </div>
          </div>
        </div>
        <div class="card col-12 col-md-6 col-lg-4">
          <div class="card-wrapper">
            <div class="img-wrapper">
              <img src="@/assets/images/2.png" alt="Mobirise Website Builder">
            </div>
            <div class="card-box align-center">

              <h5 class="card-title mbr-fonts-style mb-3 display-5"><strong>Our Partner</strong></h5>
              <p class="mbr-text mbr-fonts-style mb-4 display-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. </p>
              <div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4" href="#" target="_blank">Learn More</a></div>
            </div>
          </div>
        </div>
        <div class="card col-12 col-md-6 col-lg-4">
          <div class="card-wrapper">
            <div class="img-wrapper">
              <img src="@/assets/images/3.png" alt="Mobirise Website Builder">
            </div>
            <div class="card-box align-center">
              <h5 class="card-title mbr-fonts-style mb-3 display-5"><strong>Our Partner</strong></h5>
              <p class="mbr-text mbr-fonts-style mb-4 display-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. </p>
              <div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4" href="#" target="_blank">Learn More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contacts3 map1 cid-sFAOgbarYq" id="contacts3-c">
    <div class="container">
      <div class="mbr-section-head">
        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Як зв'язатися</strong></h3>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="card col-12 col-md-6">
          <div class="card-wrapper">
            <div class="image-wrapper">
              <span class="mbr-iconfont mobi-mbri-phone mobi-mbri" style="color: rgb(5, 56, 107); fill: rgb(5, 56, 107);"></span>
            </div>
            <div class="text-wrapper">
              <h6 class="card-title mbr-fonts-style mb-1 display-5">
                <strong>Phone</strong>
              </h6>
              <p class="mbr-text mbr-fonts-style display-7">
                0 (800) 123 45 67
              </p>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="image-wrapper">
              <span class="mbr-iconfont mobi-mbri-letter mobi-mbri" style="color: rgb(5, 56, 107); fill: rgb(5, 56, 107);"></span>
            </div>
            <div class="text-wrapper">
              <h6 class="card-title mbr-fonts-style mb-1 display-5">
                <strong>Email</strong>
              </h6>
              <p class="mbr-text mbr-fonts-style display-7">
                <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="map-wrapper col-12 col-md-6">
          <div class="google-map">
            <iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen" allowfullscreen=""></iframe>
          </div>
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
              <a href="#" target="_blank" class="text-white">Home</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#" target="_blank" class="text-white">Features</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#" target="_blank" class="text-white">Shop</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#" target="_blank" class="text-white">About</a>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-7">
              <a href="#" target="_blank" class="text-white">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="row social-row">
          <div class="social-list align-right py-2">
            <div class="soc-item">
              <a href="#" target="_blank">
                <span class="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
              </a>
            </div><div class="soc-item">
            <a href="#" target="_blank">
              <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          </div><div class="soc-item">
            <a href="#" target="_blank">
              <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          </div><div class="soc-item">
            <a href="#" target="_blank">
              <span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          </div><div class="soc-item">
            <a href="#" target="_blank">
              <span class="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          </div><div class="soc-item">
            <a href="#" target="_blank">
              <span class="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
          </div>
          </div>
        </div>
        <div class="row row-copirayt">
          <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
            © Copyright 2025 Mobirise. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import { inject, ref } from 'vue'
const myEl = ref(null)
const smoothScroll = inject('smoothScroll')
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: myEl.value,
    duration: 100,
    offset: 0,
  })
}

const menuActive = ref(false)
const menuToggle = () => menuActive.value = !menuActive.value
</script>