<template>
    <div>
      <!-- NAVIGATION -->
      
          <nav class="nav">
            <div class="nav-container">
              <a href="#">
                <img class="nav-logo" src="@/assets/images/logo.svg" alt="logo">
              </a>
              <div class="nav-modal-options">
                <ul class="nav-menu" v-for="nav in store.navbar" :key="nav.id">
                  <li class="nav-menu__item">
                    <a class="nav-item__link" :href="`#` + nav.category_name">{{nav.category_name}}</a>
                  </li>
                </ul>
                <a class="nav-connection" href="#bizgaBoglanish">Bog‘lanish</a>
              </div>
              <div class="nav-modal__btn" @click="modalOpen">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        
      <!-- NAVIGATION END -->
      <!-- MODALNAV -->
      <div class="modal-nav">
        <div class="modal-nav__header">
          <a class="modal-nav__logo" href="#">
            <img src="@/assets/images/logo.svg" alt="icone">
          </a>
          <div class="modal-nav__close" @click="modalOpen">
            <span></span>
            <span></span>
          </div>
        </div>
        <ul class="modal-nav__menu" >
          <li class="modal-menu__item" @click="modalOpen" v-for="modalNav in store.navbar" :key="modalNav.id">
            <a :href="`#` + modalNav.category_name">
              {{ modalNav.category_name }}
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.67969 4.69922L5.55469 7.82422C5.4375 7.94141 5.28125 8 5.125 8C4.94922 8 4.79297 7.94141 4.67578 7.82422C4.42188 7.58984 4.42188 7.17969 4.67578 6.94531L6.72656 4.875H0.75C0.398438 4.875 0.125 4.60156 0.125 4.25C0.125 3.91797 0.398438 3.625 0.75 3.625H6.72656L4.67578 1.57422C4.42188 1.33984 4.42188 0.929688 4.67578 0.695312C4.91016 0.441406 5.32031 0.441406 5.55469 0.695312L8.67969 3.82031C8.93359 4.05469 8.93359 4.46484 8.67969 4.69922Z"
                  fill="#575759" />
              </svg>
            </a>
  
          </li>
        </ul>
        <a class="modal-nav__btn" href="#bizgaBoglanish" @click="modalOpen">
          Ro’yhatdan o‘tish
          <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
        </a>
        <div class="modal-nav__contatctUs">
          <h2 class="modal-contactUs__title">Savollaringing bo‘lsa qo‘ng‘iroq qiling yoki telegramdan yozing</h2>
          <a href="tel:+998903011335" class="modal-contactUs__item">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.75 0.75C17.1172 0.75 18.25 1.88281 18.25 3.25V15.75C18.25 17.1562 17.1172 18.25 15.75 18.25H3.25C1.84375 18.25 0.75 17.1562 0.75 15.75V3.25C0.75 1.88281 1.84375 0.75 3.25 0.75H15.75ZM14.4609 12.0781C14.5391 11.8047 14.3828 11.4922 14.1094 11.375L12 10.4766C11.7266 10.3594 11.4531 10.4375 11.2969 10.6328L10.4375 11.6875C9.07031 11.0234 7.97656 9.92969 7.3125 8.5625L8.36719 7.70312C8.5625 7.54688 8.64062 7.27344 8.52344 7L7.625 4.89062C7.50781 4.61719 7.19531 4.46094 6.92188 4.53906L4.96875 4.96875C4.69531 5.04688 4.5 5.28125 4.5 5.59375C4.5 10.5156 8.48438 14.5 13.4062 14.5C13.7188 14.5 13.9531 14.3438 13.9922 14.0312L14.4609 12.0781Z"
                fill="white" />
            </svg>
            +998 90 301 1335
          </a>
          <a href="https://t.me/ramziddin0202" class="modal-contactUs__item">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 0.8125C15.8125 0.8125 20.1875 5.1875 20.1875 10.5C20.1875 15.8516 15.8125 20.1875 10.5 20.1875C5.14844 20.1875 0.8125 15.8516 0.8125 10.5C0.8125 5.1875 5.14844 0.8125 10.5 0.8125ZM14.9531 7.41406C14.9922 7.29688 14.9922 7.17969 14.9531 7.02344C14.9531 6.94531 14.875 6.82812 14.8359 6.78906C14.7188 6.67188 14.5234 6.67188 14.4453 6.67188C14.0938 6.67188 13.5078 6.86719 10.8125 8C9.875 8.39062 8 9.17188 5.1875 10.4219C4.71875 10.6172 4.48438 10.7734 4.44531 10.9688C4.40625 11.2812 4.91406 11.3984 5.5 11.5938C6.00781 11.75 6.67188 11.9453 7.02344 11.9453C7.33594 11.9453 7.6875 11.8281 8.07812 11.5547C10.6953 9.75781 12.0625 8.85938 12.1406 8.85938C12.2188 8.85938 12.2969 8.82031 12.3359 8.85938C12.4141 8.9375 12.4141 9.01562 12.375 9.05469C12.3359 9.25 9.875 11.5156 9.71875 11.6719C9.17188 12.2188 8.54688 12.5703 9.52344 13.1953C10.3438 13.7422 10.8125 14.0938 11.6719 14.6406C12.2188 14.9922 12.6484 15.4219 13.1953 15.3828C13.4688 15.3438 13.7422 15.1094 13.8594 14.3672C14.2109 12.6875 14.8359 8.9375 14.9531 7.41406Z"
                fill="white" />
            </svg>
            Telegram
          </a>
        </div>
      </div>
      <!-- MODALNAV END-->
      <!-- BACKGROUND LINEAR -->
      <div class="background-linear" @click="backgrounsClose"></div>
      <!-- BACKGROUND LINEAR END -->
  
      <!-- VIDEO TUTORIAL -->
      <div class="container">

        <div class="videoTutorial" :id="store.navbar[0].category_name">
          <div class="videoTutorial-info" v-for="headerInfo in store.headerSection?.data" :key="headerInfo.id">
            <h1 class="videoTutorial-info__title">
              {{ headerInfo.title }}
            </h1>
            <p class="videoTutorial-info__desc">
              {{ headerInfo.subtitle }}
            </p>
            <div class="videoTutorial-info__user" v-for="headerName in store.headerSection?.data" :key="headerName.id">
              <img class="videoTutorial-info__user-img" :src="headerName.photo" alt="icone">
              <h2 class="vieotutorial-info__user-title">{{ headerName.name }}</h2>
            </div>
            <a class="videoTutorial-info__connection common" href="#bizgaBoglanish">
              {{ headerInfo.free_course_link }}
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
            <a class="videoTutorial-info__connection media" href="#bizgaBoglanish">
              Bepul darsni sinab ko‘ring
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
          </div>
          <div class="vieoTutorial-images" v-for="headerImg in store.headerSection?.data" :key="headerImg.id">
            <img class="videoTutorial-images__item" :src="headerImg.first_img" alt="img">
            <img class="videoTutorial-images__item" :src="headerImg.second_img" alt="img">
          </div>
        </div>
        <!-- VIDEO TUTORIAL END -->
  
        <!--SARDOR QODIROV  -->
  
        <div class="sardorQodirov" v-for="video in store.headerSection?.data" :key="video.id">
          <video :src="video.video_url" controls></video>
        </div>
  
        <!--SARDOR QODIROV END  -->
  
        <!-- TOPICS -->
  
        <div class="topics" id="mavzular">
          <img class="topics-img" src="@/assets/images/header-girl.png" alt="girl">
          <h1 class="topics-title">“Super Photoshop” mavzulari</h1>
          <ul class="topics-list" >
            <li class="topics-list__item" v-for="themes in store.photoShopThemes?.data.items" :key="themes.id">
              <div class="topics-item__info">
                <h3>{{ themes.title }}</h3>
                <p>
                  {{ themes.description }}
                </p>
              </div>
              <div class="topics-item__images">
                <img :src="themes.image" alt="icone">
              </div>
            </li>
          </ul>
        </div>
  
        <!-- TOPICS END -->
  
        <!-- USING -->
        <div class="using">
          <div class="using-info">
            <div v-for="usingText in store.usingInfo?.data" :key="usingText.id">
              <h1 class="using-info__title">{{ usingText.title }}</h1> 
              <ul class="using-info__list">
                <li class="using-list__item" v-for="(text, index) in usingText.description.split(/\r?\n/)" :key="index">{{ text }}</li>
              </ul>
              <h1 class="using-info__title">{{ usingText.second_title }}</h1>
              <ul class="using-info__list">
                <li class="using-list__item" v-for="(second_desc, index) in usingText.second_description.split(/\r?\n/)" :key="index">{{ second_desc }}</li>
              </ul>
            </div>       
          </div>
          <swiper class="using-info__slide" :modules="modules" :slides-per-view="1"  :space-between="20" loop="true" :autoplay="{ delay: 3000,}">
            <swiper-slide class="using-slide__item" v-for="usingInfoImg in store.usingImg?.data" :key="usingInfoImg.id">
              <img :src="usingInfoImg.image" alt="icone">
            </swiper-slide>
          </swiper>
        </div>
        <!-- USING END -->
  
        <!-- BONUS -->
  
        <div class="bonus"  v-for="bonus in store.bonus?.data.items" :key="bonus.id" :id="store.navbar[1].category_name">
          <img class="bonus-img" src="@/assets/images/header-man.png" alt="man-img">
          <h1 class="bonus-title" v-html="bonus.main_title"></h1>
          <div class="bonus-info">
            <swiper class="using-info__slide"  :modules="modules" :slides-per-view="1" :space-between="20" loop="true" :autoplay="{
                delay: 3000,
              }" >
              <swiper-slide  v-for="bonusInfoImg in store.bonusImg?.data" :key="bonusInfoImg.id">
                <img class="bonus-info__img" :src="bonusInfoImg.image" alt="bonus-img">
              </swiper-slide>
            </swiper>
            <div class="bonus-info__text" v-for="bonusInfo in store.bonus?.data.items" :key="bonusInfo.id">
              <h1 class="bonus-info__title">{{ bonusInfo.title }}</h1>
              <ul class="bonus-info__list">
                <li class="bonus-list__item" v-for="(item, index) in bonusInfo.description.split(/\r?\n/)" :key="index">{{ item }}</li>
              </ul>
              <h1 class="bonus-info__title"> {{ store.bonus?.data.outline_title }} </h1>
              <ol class="bonus-info__list">
                <li class="bonus-list__item" v-for="(item, index) in bonusInfo.outline.split(/\r?\n/)" :key="index"> {{ item }} </li>
              </ol>
            </div>
          </div>
          <div v-for="bonusLink in store.bonus?.data.items" :key="bonusLink.id">
            <a class="bonus-btn bonus-desktop__btn" href="#bizgaBoglanish">
              {{ bonusLink.sign_up_link }}
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
            <a class="bonus-btn bonus-mobilniy__btn" href="#connection">
              {{ bonusLink.sign_up_link }}
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
          </div>
        </div>
        <!-- BONUS END -->
  
        <!-- AUTHOR -->
        <div class="author" :id="store.navbar[2].category_name">
          <div class="author-info" v-for="authorInfo in store.authorAbout?.data" :key="authorInfo.id" >
            <h1 class="author-info__title">{{ authorInfo.title }}</h1>
            <p class="author-info__desc">{{ authorInfo.content }}</p>            
            <div class="author-inf__user" v-for="authorManInfo in  store.authorAbout?.data" :key="authorManInfo.id">
              <img class="author-user__img" :src="authorManInfo.image" alt="author-img">
              <p class="author-user__desc">{{ authorManInfo.comment }}</p>
            </div>
          </div>
          <div class="author-imgs">
            <swiper class="author-imgs__swiper" :modules="modules" :slides-per-view="1" :space-between="20" loop="true" :autoplay="{
                delay: 3000,
              }">
              <swiper-slide class="author-swiper__slide" v-for="authorInfoImg in store.authorImg?.data" :key="authorInfoImg.id">
                <img class="auhtor-img__img" :src="authorInfoImg.image" alt="bonus-img">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- NETWORK -->
        <div class="social-network">
          <h1 class="social-network__title">{{ store.socialNetwork?.data.social_network_title }}</h1>
          <ul class="social-network__list">
            <li class="social-list__item" v-for="socialItem in store.socialNetwork?.data.items" :key="socialItem.id">
              <a :href="socialItem.social_link" target="_blank">
                <font-awesome-icon :icon="['fab', socialItem.social_icon]" />
                {{ socialItem.social_name }}
              </a>
            </li>
          </ul>
        </div>
        <!-- NETWORK END -->

        <!-- AUTHOR END -->
  
        <!--COMMENTS -->
        <div class="comments" :id="store.navbar[3].category_name">
          <h1 class="comments-title" id="OquvchilarFikri">{{ store.pupilComenents?.data.comment_title }}</h1>
          <ul class="comments-list desktop-list">
            <li class="comments-list__item" v-for="comments in store.pupilComenents?.data.items" :key="comments.id">
              <img class="comments-item__img" :src="comments.image" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">{{ comments.description }}</p>
                <h2 class="comments-info__title">{{ comments.name }}</h2>
              </div>
            </li>
          </ul>
          <swiper class="media-list " :slides-per-view="1" :space-between="30" :pagination="{ clickable: true }" :modules="modules" :autoplay="{
                delay: 3000,
              }">
            <swiper-slide class="comments-list__item" v-for="comments in store.pupilComenents?.data.items" :key="comments.id">
              <img class="comments-item__img" :src="comments.image" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">{{ comments.description }}</p>
                <h2 class="comments-info__title">{{ comments.name }}</h2>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!--COMMENTS  END-->
  
        <!-- PRICES -->
        <div class="prices" >
          <div class="prices-imgs" v-for=" img in store.coursePrice?.data" :key="img.id">
            <img class="prices-imgs__item" :src="img.image" alt="man-img">
          </div>
          <div class="prices-info" v-for="price in store.coursePrice?.data" :key="price.id">
            <h1 class="prices-info__title">{{ price.title }}</h1>
            <h2 class="prices-info__heading">{{ price.super_course_price }}</h2>
            <h2 class="prices-info__heading">{{ price.effect_course_price }}</h2>
            <h2 class="prices-info__originalPrice">{{ price.total_price }}</h2>
            <h2 class="prices-info__stockPri">{{ price.discount_price }}</h2>
            <a class="prices-info__btn" href="#bizgaBoglanish">
              {{ price.sign_up_link }}
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
          </div>
        </div>
        <!-- PRICES END -->
  
        <!-- REGISTRATION -->
        <div class="registration">
          <h1 class="registration-title">Ro‘yhatdan o‘tish</h1>
          <p class="registration-desc">
            Ro‘yhatdan o‘ting va operator sizga tez orada aloqaga chiqadi. Sotib olishdan oldin <span>bepul darsni</span>
            sinab ko‘rishingiz mumkin.
          </p>
          <form class="registration-form" action="" >
            <input class="registration-form__name" type="text" v-model="inputName" required placeholder="Ismingiz"
              @click="inputNameTrue">
            <input class="registration-form__number" id="phoneInput" ref="phoneInput" v-model="inputNumber" type="tel" required placeholder="+998901615131"
              @click="inputNameTrue">
              <div>
                  <!-- <router-link to="/registerView" class="registration-form__btn" >
                    Ro’yhatdan o‘tish
                    <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
                 </router-link> -->
                 <!-- register -->
                 <button class="registration-form__btn" @click.prevent="getContact" >
                     Ro’yhatdan o‘tish
                     <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
                 </button>
            </div>
          </form>
        </div>
        <!-- REGISTRATION END -->
  

  
        <!-- CONNECTION  -->
  
        <div class="connection" id="bizgaBoglanish" v-for="footer in store.siteFooter?.data" :key="footer.id">
          <h1 class="connection-title">{{ footer.title }}</h1>
          <div class="connection-btns" v-for="footerInfo in store.siteFooter?.data" :key="footerInfo.id">
            <a :href="footerInfo.phone" class="connection-btns__item">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.75 0.75C17.1172 0.75 18.25 1.88281 18.25 3.25V15.75C18.25 17.1562 17.1172 18.25 15.75 18.25H3.25C1.84375 18.25 0.75 17.1562 0.75 15.75V3.25C0.75 1.88281 1.84375 0.75 3.25 0.75H15.75ZM14.4609 12.0781C14.5391 11.8047 14.3828 11.4922 14.1094 11.375L12 10.4766C11.7266 10.3594 11.4531 10.4375 11.2969 10.6328L10.4375 11.6875C9.07031 11.0234 7.97656 9.92969 7.3125 8.5625L8.36719 7.70312C8.5625 7.54688 8.64062 7.27344 8.52344 7L7.625 4.89062C7.50781 4.61719 7.19531 4.46094 6.92188 4.53906L4.96875 4.96875C4.69531 5.04688 4.5 5.28125 4.5 5.59375C4.5 10.5156 8.48438 14.5 13.4062 14.5C13.7188 14.5 13.9531 14.3438 13.9922 14.0312L14.4609 12.0781Z"
                  fill="white" />
              </svg>
              +998 90 301 1335
            </a>
            <a :href="footerInfo.telegram" class="connection-btns__item">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 0.8125C15.8125 0.8125 20.1875 5.1875 20.1875 10.5C20.1875 15.8516 15.8125 20.1875 10.5 20.1875C5.14844 20.1875 0.8125 15.8516 0.8125 10.5C0.8125 5.1875 5.14844 0.8125 10.5 0.8125ZM14.9531 7.41406C14.9922 7.29688 14.9922 7.17969 14.9531 7.02344C14.9531 6.94531 14.875 6.82812 14.8359 6.78906C14.7188 6.67188 14.5234 6.67188 14.4453 6.67188C14.0938 6.67188 13.5078 6.86719 10.8125 8C9.875 8.39062 8 9.17188 5.1875 10.4219C4.71875 10.6172 4.48438 10.7734 4.44531 10.9688C4.40625 11.2812 4.91406 11.3984 5.5 11.5938C6.00781 11.75 6.67188 11.9453 7.02344 11.9453C7.33594 11.9453 7.6875 11.8281 8.07812 11.5547C10.6953 9.75781 12.0625 8.85938 12.1406 8.85938C12.2188 8.85938 12.2969 8.82031 12.3359 8.85938C12.4141 8.9375 12.4141 9.01562 12.375 9.05469C12.3359 9.25 9.875 11.5156 9.71875 11.6719C9.17188 12.2188 8.54688 12.5703 9.52344 13.1953C10.3438 13.7422 10.8125 14.0938 11.6719 14.6406C12.2188 14.9922 12.6484 15.4219 13.1953 15.3828C13.4688 15.3438 13.7422 15.1094 13.8594 14.3672C14.2109 12.6875 14.8359 8.9375 14.9531 7.41406Z"
                  fill="white" />
              </svg>
              Telegram
            </a>
          </div>
        </div>
  
        <!-- CONNECTION  END -->
  
        <!-- SERTIFICATE -->
        <div class="sertificate" v-for="sertificat in store.footerInfo?.data" :key="sertificat.id">
          <p class="sertificate-desc" v-html="sertificat.reserved"></p>
        </div>
        <div class="sertificate" v-for="sertificatInfo in store.siteFooter?.data" :key="sertificatInfo.id">
          <p class="sertificate-desc" v-html="sertificatInfo.powered_by"></p>
        </div>
        <!-- SERTIFICATE END -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref , onMounted } from "vue";
  import {useCounterStore} from "@/stores/counter";
  import { Pagination, Autoplay } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import IMask from "imask";
  const store = useCounterStore();
  const baseUrl = 'https://superphotoshop.uz/api';
  let phoneMask
  let inputName = ref("")
  let inputNumber = ref("")

  const modules = [ Pagination, Autoplay]
  const  congratulation = ref(false)
  onMounted(() => {
    phoneMask = new IMask(
      document.getElementById('phoneInput'),
      {
        mask: '+{998} (00) 000-00-00',
        prepare: (appended, masked) => {
          if (appended === '8' && masked.value === '') {
            return ''
          }
          return appended
        }
      }
    )
  })
  // NAVIGATION FIXED
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle("fixedNav", window.scrollY > 0)
  })
  
  
  // MODAL NAV OPEN
  
  function modalOpen() {
    console.log(inputName)
    const modal = document.querySelector('.modal-nav');
    const backgroundlinear = document.querySelector('.background-linear')
    if (modal.classList.contains('modal-nav--show')) {
      modal.classList.remove('modal-nav--show')
      backgroundlinear.classList.remove('background-linear--show')
    } else {
      modal.classList.add('modal-nav--show')
      backgroundlinear.classList.add('background-linear--show')
    }
  }
  
  // REGISTER MODAL OPEN
  
  function registerModal() {
    const backgroundlinear = document.querySelector('.background-linear')
    // const registerModal = document.querySelector('.register-modal')
    const inputNameError = document.querySelector('.registration-form__name');
    const inputNumberError = document.querySelector('.registration-form__number')
    if (inputName.value.length !== 0 && inputNumber.value.length !== 0) {
      congratulation.value = true
      
      
    } else {
        inputNameError.classList.add('registration-form__name--show')
        inputNumberError.classList.add('registration-form__name--show')
        congratulation.value = true

    }
  }
  function inputNameTrue() {
    const inputNameError = document.querySelector('.registration-form__name');
    const inputNumberError = document.querySelector('.registration-form__number')
    inputNameError.classList.remove('registration-form__name--show')
    inputNumberError.classList.remove('registration-form__name--show')
  
  }
  

  // BACKGRUND LINEAR
  function backgrounsClose() {
    const registerModal = document.querySelector('.register-modal')
    const modal = document.querySelector('.modal-nav');
    const backgroundlinear = document.querySelector('.background-linear')
    modal.classList.remove('modal-nav--show')
    backgroundlinear.classList.remove('background-linear--show')
    registerModal.classList.remove('register-modal--show')
    
  }



  async function getContact() {
 
    const response = await fetch(baseUrl + '/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: inputName.value,
        phone: inputNumber.value
      })
    });
    console.log("qoshildi");

}


 

  
  </script>
  
  <style scoped>

</style>