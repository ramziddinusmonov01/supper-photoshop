<template>
    <div>
      <!-- NAVIGATION -->
      
          <nav class="nav">
            <div class="nav-container">
              <a href="#">
                <img class="nav-logo" src="@/assets/images/logo.svg" alt="logo">
              </a>
              <div class="nav-modal-options">
                <ul class="nav-menu">
                  <li class="nav-menu__item">
                    <a class="nav-item__link" href="#mavzular">Mavzular</a>
                  </li>
                  <li class="nav-menu__item">
                    <a class="nav-item__link" href="#bonus">Bonus</a>
                  </li>
                  <li class="nav-menu__item">
                    <a class="nav-item__link" href="#muallifHaqida">Muallif haqida</a>
                  </li>
                  <li class="nav-menu__item">
                    <a class="nav-item__link" href="#OquvchilarFikri">O‘quvchilar fikri</a>
                  </li>
                  <li class="nav-menu__item">
                    <a class="nav-item__link" href="#narx">Narx</a>
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
        <ul class="modal-nav__menu">
          <li class="modal-menu__item" @click="modalOpen">
            <a href="#mavzular">
              Mavzular
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.67969 4.69922L5.55469 7.82422C5.4375 7.94141 5.28125 8 5.125 8C4.94922 8 4.79297 7.94141 4.67578 7.82422C4.42188 7.58984 4.42188 7.17969 4.67578 6.94531L6.72656 4.875H0.75C0.398438 4.875 0.125 4.60156 0.125 4.25C0.125 3.91797 0.398438 3.625 0.75 3.625H6.72656L4.67578 1.57422C4.42188 1.33984 4.42188 0.929688 4.67578 0.695312C4.91016 0.441406 5.32031 0.441406 5.55469 0.695312L8.67969 3.82031C8.93359 4.05469 8.93359 4.46484 8.67969 4.69922Z"
                  fill="#575759" />
              </svg>
            </a>
  
          </li>
          <li class="modal-menu__item" @click="modalOpen">
            <a href="#muallifHaqida">
              Muallif haqida
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.67969 4.69922L5.55469 7.82422C5.4375 7.94141 5.28125 8 5.125 8C4.94922 8 4.79297 7.94141 4.67578 7.82422C4.42188 7.58984 4.42188 7.17969 4.67578 6.94531L6.72656 4.875H0.75C0.398438 4.875 0.125 4.60156 0.125 4.25C0.125 3.91797 0.398438 3.625 0.75 3.625H6.72656L4.67578 1.57422C4.42188 1.33984 4.42188 0.929688 4.67578 0.695312C4.91016 0.441406 5.32031 0.441406 5.55469 0.695312L8.67969 3.82031C8.93359 4.05469 8.93359 4.46484 8.67969 4.69922Z"
                  fill="#575759" />
              </svg>
            </a>
          </li>
          <li class="modal-menu__item" @click="modalOpen">
            <a href="#OquvchilarFikri">
              O‘quvchilar fikri
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.67969 4.69922L5.55469 7.82422C5.4375 7.94141 5.28125 8 5.125 8C4.94922 8 4.79297 7.94141 4.67578 7.82422C4.42188 7.58984 4.42188 7.17969 4.67578 6.94531L6.72656 4.875H0.75C0.398438 4.875 0.125 4.60156 0.125 4.25C0.125 3.91797 0.398438 3.625 0.75 3.625H6.72656L4.67578 1.57422C4.42188 1.33984 4.42188 0.929688 4.67578 0.695312C4.91016 0.441406 5.32031 0.441406 5.55469 0.695312L8.67969 3.82031C8.93359 4.05469 8.93359 4.46484 8.67969 4.69922Z"
                  fill="#575759" />
              </svg>
            </a>
          </li>
          <li class="modal-menu__item" @click="modalOpen">
            <a href="#narx">
              Narx
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

        <div class="videoTutorial">
          <div class="videoTutorial-info">
            <h1 class="videoTutorial-info__title">
              Grafik dizaynerlar uchun
              photoshop videodarslari
            </h1>
            <p class="videoTutorial-info__desc">
              Dizaynerlikni boshlamoqchi yoki tajribasini
              oshirmoqchi bo‘lganlar uchun
            </p>
            <div class="videoTutorial-info__user">
              <img class="videoTutorial-info__user-img" src="@/assets/images/header-Sardorbek.svg" alt="icone">
              <h2 class="vieotutorial-info__user-title">Sardor Qodirov</h2>
            </div>
            <a class="videoTutorial-info__connection common" href="#bizgaBoglanish">
              Ro’yhatdan o‘ting, bepul darsni sinab ko‘ring
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
            <a class="videoTutorial-info__connection media" href="#bizgaBoglanish">
              Bepul darsni sinab ko‘ring
              <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
            </a>
          </div>
          <div class="vieoTutorial-images">
            <img class="videoTutorial-images__item" src="@/assets/images/header-man.png" alt="img">
            <img class="videoTutorial-images__item" src="@/assets/images/header-girl.png" alt="img">
          </div>
        </div>
        <!-- VIDEO TUTORIAL END -->
  
        <!--SARDOR QODIROV  -->
  
        <div class="sardorQodirov">
          <video src="@/assets/video/video.mp4" controls></video>
        </div>
  
        <!--SARDOR QODIROV END  -->
  
        <!-- TOPICS -->
  
        <div class="topics" id="mavzular">
          <img class="topics-img" src="@/assets/images/header-girl.png" alt="girl">
          <h1 class="topics-title">“Super Photoshop” mavzulari</h1>
          <ul class="topics-list">
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Kirish. Photoshop asoslari</h3>
                <p>
                  Photoshop dasturini 0 dan boshlab, barcha uskunalari, filtrlar o’rnatish va ishlash jarayonidagi
                  layfhaklar o‘rgatiladi
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Kirish-Photoshop-asoslari.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Poligrafiya dizaynlari</h3>
                <p>
                  Ushbu bo‘limda vizitka, flayer, banner va boshqa chop qilinuvchi dizaynlarni tayyorlashni o‘rganasiz
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Poligrafiya-dizaynlari.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Grafik dizaynda trend</h3>
                <p>
                  Hozirgi kunda trendga aylangan dizaynlar va effektlarni tayyorlashni o‘rganasiz
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Grafik-dizaynda-trend.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Kollajlar va surrealizm darslari</h3>
                <p>
                  Ushbu bo‘limda bir necha rasm resurslardan foydalangan xolda ajoyib kollaj, manupulyatsiyalar o’rgatiladi
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Kollajlar-surrealizm-darslari.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Ijtimoiy tarmoqlar uchun dizaynlar. SMM design</h3>
                <p>
                  Instagram, facebook, telegram, youtube va boshqa ijtimoiy tarmoqlar uchun dizaynlar tayyorlashlar
                  o’rgatilgan
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Ijtimoiy-tarmoqlar-uchun.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Rasmlarni qayta ishlash</h3>
                <p>
                  Rasmlarni retush qilish, ranglarni korreksiya qilish, filtrlar bilan ishlash va boshqa usullar o’rgatilgan
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Rasmlarni-qayta-ishlash.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Mockup</h3>
                <p>
                  Ushbu bo’limda siz tayyorlagan dizaynlaringizni mijozga chiroyli qilib taqdimoq qilish o’rgatiladi
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Mockup.svg" alt="icone">
              </div>
            </li>
            <li class="topics-list__item">
              <div class="topics-item__info">
                <h3>Behance & Envato</h3>
                <p>
                  Qanday qilib portfolio tayyorlash va Envato marketpleysiyda tayyorlagan dizaynlarni sotish o‘rgatiladi
                </p>
              </div>
              <div class="topics-item__images">
                <img src="@/assets/images/Behance-Envato.svg" alt="icone">
              </div>
            </li>
          </ul>
        </div>
  
        <!-- TOPICS END -->
  
        <!-- USING -->
        <div class="using">
          <div class="using-info">
            <h1 class="using-info__title">Darslikdan foydalanish:</h1>
            <ul class="using-info__list">
              <li class="using-list__item">
                70 ta tizimlashtirilgan videodars
              </li>
              <li class="using-list__item">
                Darslarga kerakli resurslar. Topshiriq-vazifalar
              </li>
              <li class="using-list__item">
                Darslar online platformada login-parol orqali, istalgan payt kirib ko’rib o’rganishingiz mumkin. Internet va
                komputeringiz bo’lishi kerak
              </li>
              <li class="using-list__item">
                Darslarga 1 yilga ruxsat beriladi. O‘rtacha 2 oyda bemalol tamomlasa bo‘ladi va 1 yil davomida qayta ko‘rish
                mumkin
              </li>
              <li class="using-list__item">
                Dars bo‘yicha savollarga telegramdagi yopiq guruhimizdan javob olishingiz mumkin
              </li>
            </ul>
            <h1 class="using-info__title">Darslik kimlar uchun:</h1>
            <ul class="using-info__list">
              <li class="using-list__item">DIzaynerlikni o‘rganmoqchi bo‘lganlar</li>
              <li class="using-list__item">Tajribasini oshirmoqchi dizaynerlar</li>
              <li class="using-list__item">SMM agentliklari, talabalar, motion dizaynerlar</li>
              <li class="using-list__item">Yangi bilimlarni o‘zlashtirmoqchi bo‘lganlar</li>
            </ul>
          </div>
          <swiper class="using-info__slide" :modules="modules" :slides-per-view="1"  :space-between="20" loop="true" :autoplay="{
                delay: 3000,
                
              }"
           >
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-1.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-2.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-3.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-4.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-5.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-6.png" alt="using-img">
            </swiper-slide>
            <swiper-slide class="using-slide__item">
              <img class="using-img" src="@/assets/images/using-img-7.png" alt="using-img">
            </swiper-slide>
          </swiper>
        </div>
        <!-- USING END -->
  
        <!-- BONUS -->
  
        <div class="bonus" id="bonus">
          <img class="bonus-img" src="@/assets/images/header-man.png" alt="man-img">
          <h1 class="bonus-title"><span>BONUS!</span> “Photoshop Effekt” videodarslari</h1>
          <div class="bonus-info">
            <swiper class="using-info__slide"  :modules="modules" :slides-per-view="1" :space-between="20" loop="true" :autoplay="{
                delay: 3000,
              }">
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img-1.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img-2.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img-3.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img-4.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide>
                <img class="bonus-info__img" src="@/assets/images/bonus-img-5.png" alt="bonus-img">
              </swiper-slide>
            </swiper>
            <div class="bonus-info__text">
              <h1 class="bonus-info__title">Ushbu darslikda</h1>
              <ul class="bonus-info__list">
                <li class="bonus-list__item">Konturniy svetlar bilan effektlar xosil qilish (oddiy sichqoncha yordamida)
                </li>
                <li class="bonus-list__item">Komponovka va kompozitsiyalarni tanlash</li>
                <li class="bonus-list__item">Ranglar va shriftlarni tanlash o‘rgatilgan</li>
              </ul>
              <h1 class="bonus-info__title">Mundarija:</h1>
              <ol class="bonus-info__list">
                <li class="bonus-list__item">iPhone uchun SMM dizayn (25 min)</li>
                <li class="bonus-list__item">Apple Watch uchun poster dizayn (20 min) </li>
                <li class="bonus-list__item">Game kanal uchun Youtube prevyu 1-dizayn (33 min)</li>
                <li class="bonus-list__item">Youtube prevyu 2-dizayn (39 min) </li>
                <li class="bonus-list__item">Yangiliklar kanali uchun prevyu 3-dizayn (34 min)</li>
                <li class="bonus-list__item">Futbol kanali (250k) uchun 4-prevyu dizayn. Xayrulla Hamidov menejeri bilan
                  muloqot (26 min)</li>
              </ol>
            </div>
          </div>
          <a class="bonus-btn bonus-desktop__btn" href="#bizgaBoglanish">
            Ro’yhatdan o‘ting va bepul darsni sinab ko‘ring
            <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
          </a>
          <a class="bonus-btn bonus-mobilniy__btn" href="#connection">
            Ro‘yhatdan o‘ting
            <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
          </a>
        </div>
  
        <!-- BONUS END -->
  
        <!-- AUTHOR -->
        <div class="author" id="muallifHaqida">
          <div class="author-info">
            <h1 class="author-info__title">Muallif Haqida</h1>
            <p class="author-info__desc">
              Sardor Qodirov 2014 yili TATU Farg’ona filiali magistratura bitiruvchisi, 2014-2018 yillar davomida
              universitetda “Kompyuter grafikasi” va “Kreativ loyihalash” fanlaridan talabalarga ta’lim bergan.
            </p>
            <p class="author-info__desc">
              Hozirda <a href="https://faraway.com/" target="blank">faraway.com</a> kompaniyasida UX/UI dizayner va Envato
              kompaniyasining <a href="https://videohive.net/" target="blank">videohive.net</a> marketpleysida faoliyat
              yuritadi.
            </p>
            <p class="author-info__desc">
              Dizaynlarni jahon bozorida sotish va chet el kompaniyalarida frilanserlik bo’yicha katta tajribaga ega.
            </p>
            <div class="author-inf__user">
              <img class="author-user__img" src="@/assets/images/header-Sardorbek.svg" alt="author-img">
              <p class="author-user__desc">
                “Siz ham ushbu bilimlarni o’zlashtirib, hayotda reja qilgan maqsadlaringizga erishishingizni xohlayman”
              </p>
            </div>
          </div>
          <div class="author-imgs">
            <swiper class="author-imgs__swiper" :modules="modules" :slides-per-view="1" :space-between="20" loop="true" :autoplay="{
                delay: 3000,
              }">
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-1.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-2.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-3.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-4.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-5.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-6.png" alt="bonus-img">
              </swiper-slide>
              <swiper-slide class="author-swiper__slide">
                <img class="auhtor-img__img" src="@/assets/images/author-img-7.png" alt="bonus-img">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="social-network">
          <h1 class="social-network__title">Sardor Qodirovning ijtimoiy tarmoqlari:</h1>
          <ul class="social-network__list">
            <li class="social-list__item youtube">
              <a href="https://www.youtube.com/@kadirovgroup" target="_blank">
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.0898 3.12109C23.6055 4.92578 23.6055 8.79297 23.6055 8.79297C23.6055 8.79297 23.6055 12.6172 23.0898 14.4648C22.832 15.4961 22.0156 16.2695 21.0273 16.5273C19.1797 17 11.875 17 11.875 17C11.875 17 4.52734 17 2.67969 16.5273C1.69141 16.2695 0.875 15.4961 0.617188 14.4648C0.101562 12.6172 0.101562 8.79297 0.101562 8.79297C0.101562 8.79297 0.101562 4.92578 0.617188 3.12109C0.875 2.08984 1.69141 1.27344 2.67969 1.01562C4.52734 0.5 11.875 0.5 11.875 0.5C11.875 0.5 19.1797 0.5 21.0273 1.01562C22.0156 1.27344 22.832 2.08984 23.0898 3.12109ZM9.46875 12.2734L15.5703 8.79297L9.46875 5.3125V12.2734Z"
                    fill="#FF0000" />
                </svg>
                Youtube (16k)
              </a>
            </li>
            <li class="social-list__item telegram">
              <a href="https://t.me/kompyuter_grafika_darslari" target="_blank">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.625 0.09375C17.4688 0.09375 22.2812 4.90625 22.2812 10.75C22.2812 16.6367 17.4688 21.4062 11.625 21.4062C5.73828 21.4062 0.96875 16.6367 0.96875 10.75C0.96875 4.90625 5.73828 0.09375 11.625 0.09375ZM16.5234 7.35547C16.5664 7.22656 16.5664 7.09766 16.5234 6.92578C16.5234 6.83984 16.4375 6.71094 16.3945 6.66797C16.2656 6.53906 16.0508 6.53906 15.9648 6.53906C15.5781 6.53906 14.9336 6.75391 11.9688 8C10.9375 8.42969 8.875 9.28906 5.78125 10.6641C5.26562 10.8789 5.00781 11.0508 4.96484 11.2656C4.92188 11.6094 5.48047 11.7383 6.125 11.9531C6.68359 12.125 7.41406 12.3398 7.80078 12.3398C8.14453 12.3398 8.53125 12.2109 8.96094 11.9102C11.8398 9.93359 13.3438 8.94531 13.4297 8.94531C13.5156 8.94531 13.6016 8.90234 13.6445 8.94531C13.7305 9.03125 13.7305 9.11719 13.6875 9.16016C13.6445 9.375 10.9375 11.8672 10.7656 12.0391C10.1641 12.6406 9.47656 13.0273 10.5508 13.7148C11.4531 14.3164 11.9688 14.7031 12.9141 15.3047C13.5156 15.6914 13.9883 16.1641 14.5898 16.1211C14.8906 16.0781 15.1914 15.8203 15.3203 15.0039C15.707 13.1562 16.3945 9.03125 16.5234 7.35547Z"
                    fill="#0071E3" />
                </svg>
                Telegram (6,7k)
              </a>
            </li>
            <li class="social-list__item instagram">
              <a href="https://www.instagram.com/kadirovgroup/" target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.375 4.80859C13.082 4.80859 15.3164 7.04297 15.3164 9.75C15.3164 12.5 13.082 14.6914 10.375 14.6914C7.625 14.6914 5.43359 12.5 5.43359 9.75C5.43359 7.04297 7.625 4.80859 10.375 4.80859ZM10.375 12.9727C12.1367 12.9727 13.5547 11.5547 13.5547 9.75C13.5547 7.98828 12.1367 6.57031 10.375 6.57031C8.57031 6.57031 7.15234 7.98828 7.15234 9.75C7.15234 11.5547 8.61328 12.9727 10.375 12.9727ZM16.6484 4.63672C16.6484 3.99219 16.1328 3.47656 15.4883 3.47656C14.8438 3.47656 14.3281 3.99219 14.3281 4.63672C14.3281 5.28125 14.8438 5.79688 15.4883 5.79688C16.1328 5.79688 16.6484 5.28125 16.6484 4.63672ZM19.9141 5.79688C20 7.38672 20 12.1562 19.9141 13.7461C19.8281 15.293 19.4844 16.625 18.3672 17.7852C17.25 18.9023 15.875 19.2461 14.3281 19.332C12.7383 19.418 7.96875 19.418 6.37891 19.332C4.83203 19.2461 3.5 18.9023 2.33984 17.7852C1.22266 16.625 0.878906 15.293 0.792969 13.7461C0.707031 12.1562 0.707031 7.38672 0.792969 5.79688C0.878906 4.25 1.22266 2.875 2.33984 1.75781C3.5 0.640625 4.83203 0.296875 6.37891 0.210938C7.96875 0.125 12.7383 0.125 14.3281 0.210938C15.875 0.296875 17.25 0.640625 18.3672 1.75781C19.4844 2.875 19.8281 4.25 19.9141 5.79688ZM17.8516 15.4219C18.3672 14.1758 18.2383 11.168 18.2383 9.75C18.2383 8.375 18.3672 5.36719 17.8516 4.07812C17.5078 3.26172 16.8633 2.57422 16.0469 2.27344C14.7578 1.75781 11.75 1.88672 10.375 1.88672C8.95703 1.88672 5.94922 1.75781 4.70312 2.27344C3.84375 2.61719 3.19922 3.26172 2.85547 4.07812C2.33984 5.36719 2.46875 8.375 2.46875 9.75C2.46875 11.168 2.33984 14.1758 2.85547 15.4219C3.19922 16.2812 3.84375 16.9258 4.70312 17.2695C5.94922 17.7852 8.95703 17.6562 10.375 17.6562C11.75 17.6562 14.7578 17.7852 16.0469 17.2695C16.8633 16.9258 17.5508 16.2812 17.8516 15.4219Z"
                    fill="#FF003D" />
                </svg>
  
                Instagram (4k)
              </a>
            </li>
            <li class="social-list__item behance">
              <a href="https://www.behance.net/kadirovgroup" target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.49219 11.3398C8.49219 12.1992 7.89062 12.457 7.16016 12.457H5.22656V10.1797H7.20312C7.97656 10.1797 8.49219 10.5234 8.49219 11.3398ZM8.14844 7.81641C8.14844 7.04297 7.58984 6.87109 6.90234 6.87109H5.22656V8.80469H7.07422C7.71875 8.80469 8.14844 8.50391 8.14844 7.81641ZM13.8633 8.80469C13.0469 8.80469 12.5312 9.32031 12.4883 10.0938H15.1523C15.0664 9.32031 14.6797 8.80469 13.8633 8.80469ZM19.75 2.1875V17.3125C19.75 18.4727 18.8047 19.375 17.6875 19.375H2.5625C1.40234 19.375 0.5 18.4727 0.5 17.3125V2.1875C0.5 1.07031 1.40234 0.125 2.5625 0.125H17.6875C18.8047 0.125 19.75 1.07031 19.75 2.1875ZM12.1445 6.69922H15.4961V5.92578H12.1445V6.69922ZM10.2969 11.4688C10.2969 10.4375 9.82422 9.53516 8.79297 9.23438C9.52344 8.89062 9.91016 8.46094 9.91016 7.64453C9.91016 6.01172 8.70703 5.625 7.28906 5.625H3.42188V13.875H7.41797C8.92188 13.832 10.2969 13.1445 10.2969 11.4688ZM16.8281 10.8242C16.8281 9.0625 15.7539 7.60156 13.9062 7.60156C12.1016 7.60156 10.8555 8.93359 10.8555 10.7383C10.8555 12.5859 12.0156 13.875 13.9062 13.875C15.3242 13.875 16.2695 13.2305 16.6992 11.8555H15.2383C15.1094 12.3711 14.4648 12.6289 13.9492 12.6289C13.0039 12.6289 12.4883 12.0703 12.4883 11.125H16.7852C16.7852 11.0391 16.8281 10.9102 16.8281 10.8242Z"
                    fill="#0071E3" />
                </svg>
  
                Behance
              </a>
            </li>
          </ul>
        </div>
  
        <!-- AUTHOR END -->
  
        <!--COMMENTS -->
        <div class="comments">
          <h1 class="comments-title" id="OquvchilarFikri">O‘quvchilar fikri</h1>
          <ul class="comments-list desktop-list">
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Djanibek-Amanbaev.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham 0 dan boshlayotgan odam o'rganib ketish
                  darajasi yuqori, sababi har bir termin, har bir uskunalar va ularning nima ishlashi, qanday vaqtda
                  ishlatilishi to'liq tushuntirilgan
                </p>
                <h2 class="comments-info__title">Djanibek Amanbaev</h2>
              </div>
            </li>
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Shukurullo-Tojinazarov.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Ajoyib video dars, Nomiga mos Super. Bu darsni albatta sotib oling, chunki mukammal darajada. Siz bu
                  darslardan o'zingiz o'rgana olasiz va darslar hammaga mos va qulay darajada ishlangan.
                </p>
                <h2 class="comments-info__title">Shukurullo Tojinazarov</h2>
              </div>
            </li>
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Begzod-Yaxshilikov.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Darsni bergan bilimiga nisbatan narxi arzon o'ylanmasdan sotib olishga arziydi sifatli va zo'r.
                </p>
                <h2 class="comments-info__title">Begzod Yaxshilikov</h2>
              </div>
            </li>
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Bunaqa kursdan ortiq hech narsa kerak emas, maqsadi bor odamga! Aniqroq maqsad bo'masa bundan zo'r kursni
                  ham foydasi tegmaydi. Sardor aka raxmat!!
                </p>
                <h2 class="comments-info__title">Nodir Tukhtaboev</h2>
              </div>
            </li>
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Ajoyib. Men bu video darslikni sotib oldim va men buning uchun afsuslanmayman. Barchaga tavsiya qilaman
                </p>
                <h2 class="comments-info__title">Asadbek Tilepov</h2>
              </div>
            </li>
            <li class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Bu darsni albatta sotib oling chunkiy mukammal darajada siz bu darslardan o'zingiz o'rgana olasiz va
                  darslar hammaga mos va qulay darajada ishlangan
                </p>
                <h2 class="comments-info__title">Imomali Boltaboyev</h2>
              </div>
            </li>
          </ul>
          <swiper class="media-list " :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }" :modules="modules" :autoplay="{
                delay: 3000,
              }">
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Djanibek-Amanbaev.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham 0 dan boshlayotgan odam o'rganib ketish
                  darajasi yuqori, sababi har bir termin, har bir uskunalar va ularning nima ishlashi, qanday vaqtda
                  ishlatilishi to'liq tushuntirilgan
                </p>
                <h2 class="comments-info__title">Djanibek Amanbaev</h2>
              </div>
            </swiper-slide>
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Shukurullo-Tojinazarov.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Ajoyib video dars, Nomiga mos Super. Bu darsni albatta sotib oling, chunki mukammal darajada. Siz bu
                  darslardan o'zingiz o'rgana olasiz va darslar hammaga mos va qulay darajada ishlangan.
                </p>
                <h2 class="comments-info__title">Shukurullo Tojinazarov</h2>
              </div>
            </swiper-slide>
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/Begzod-Yaxshilikov.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Darsni bergan bilimiga nisbatan narxi arzon o'ylanmasdan sotib olishga arziydi sifatli va zo'r.
                </p>
                <h2 class="comments-info__title">Begzod Yaxshilikov</h2>
              </div>
            </swiper-slide>
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Bunaqa kursdan ortiq hech narsa kerak emas, maqsadi bor odamga! Aniqroq maqsad bo'masa bundan zo'r kursni
                  ham foydasi tegmaydi. Sardor aka raxmat!!
                </p>
                <h2 class="comments-info__title">Nodir Tukhtaboev</h2>
              </div>
            </swiper-slide>
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Ajoyib. Men bu video darslikni sotib oldim va men buning uchun afsuslanmayman. Barchaga tavsiya qilaman
                </p>
                <h2 class="comments-info__title">Asadbek Tilepov</h2>
              </div>
            </swiper-slide>
            <swiper-slide class="comments-list__item">
              <img class="comments-item__img" src="@/assets/images/user-icone.svg" alt="img">
              <div class="comments-item__info">
                <p class="coments-info__desc">
                  Bu darsni albatta sotib oling chunkiy mukammal darajada siz bu darslardan o'zingiz o'rgana olasiz va
                  darslar hammaga mos va qulay darajada ishlangan
                </p>
                <h2 class="comments-info__title">Imomali Boltaboyev</h2>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!--COMMENTS  END-->
  
        <!-- PRICES -->
        <div class="prices" id="narx">
          <div class="prices-imgs">
            <img class="prices-imgs__item" src="@/assets/images/header-man.png" alt="man-img">
            <img class="prices-imgs__item" src="@/assets/images/header-girl.png" alt="girl-img">
          </div>
          <div class="prices-info">
            <h1 class="prices-info__title">Videodarslar narxi</h1>
            <h2 class="prices-info__heading">Super Photoshop - 600.000 so‘m</h2>
            <h2 class="prices-info__heading">Photoshop Effekt - 250.000 so‘m</h2>
            <h2 class="prices-info__originalPrice">850.000 so‘m</h2>
            <h2 class="prices-info__stockPri">3300.000 so‘m </h2>
            <a class="prices-info__btn" href="#bizgaBoglanish">
              Ro’yhatdan o‘tish
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
          <form class="registration-form" action="">
            <input class="registration-form__name" type="text" v-model="inputName" required placeholder="Ismingiz"
              @click="inputNameTrue">
            <input class="registration-form__number" v-model="inputNumber" type="tel" required placeholder="+998901615131"
              @click="inputNameTrue">
              <div>
                  <router-link to="/registerView" class="registration-form__btn" v-if="congratulation"  @click="registerModal">
                    Ro’yhatdan o‘tish
                    <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
                 </router-link>
                 <button class="registration-form__btn" v-else  @click.prevent="registerModal">
                     Ro’yhatdan o‘tish
                     <img src="@/assets/images/arrow-right-solid.svg" alt="icone">
                 </button>
            </div>
          </form>
        </div>
        <!-- REGISTRATION END -->
  
        <!-- REGISTRATION MODAL -->
        <div class="register-modal">
          <img class="register-modal__img" src="@/assets/images/check.svg" alt="icone">
          <h2 class="register-modal__title">Ro‘yhatdan o‘tganingiz uchun rahmat! Tez orada operatorimiz siz bilan
            bog‘lanadi.</h2>
          <button class="register-modal__btn" @click="backgrounsClose">OK</button>
        </div>
        <!-- REGISTRATION MODAL END -->
  
        <!-- CONNECTION  -->
  
        <div class="connection" id="bizgaBoglanish">
          <h1 class="connection-title">Savollaringing bo‘lsa qo‘ng‘iroq qiling yoki telegramdan yozing</h1>
          <div class="connection-btns">
            <a href="tel:+998903011335" class="connection-btns__item">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.75 0.75C17.1172 0.75 18.25 1.88281 18.25 3.25V15.75C18.25 17.1562 17.1172 18.25 15.75 18.25H3.25C1.84375 18.25 0.75 17.1562 0.75 15.75V3.25C0.75 1.88281 1.84375 0.75 3.25 0.75H15.75ZM14.4609 12.0781C14.5391 11.8047 14.3828 11.4922 14.1094 11.375L12 10.4766C11.7266 10.3594 11.4531 10.4375 11.2969 10.6328L10.4375 11.6875C9.07031 11.0234 7.97656 9.92969 7.3125 8.5625L8.36719 7.70312C8.5625 7.54688 8.64062 7.27344 8.52344 7L7.625 4.89062C7.50781 4.61719 7.19531 4.46094 6.92188 4.53906L4.96875 4.96875C4.69531 5.04688 4.5 5.28125 4.5 5.59375C4.5 10.5156 8.48438 14.5 13.4062 14.5C13.7188 14.5 13.9531 14.3438 13.9922 14.0312L14.4609 12.0781Z"
                  fill="white" />
              </svg>
              +998 90 301 1335
            </a>
            <a href="https://t.me/kompyuter_grafika_darslari" class="connection-btns__item">
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
        <div class="sertificate">
          <p class="sertificate-desc">© Barcha huquqlar himoyalangan. "International Software" MCHJ. Guvohnoma №1888</p>
        </div>
        <div class="sertificate">
          <p class="sertificate-desc">Powered by
            <a href="https://onlinedars.uz/">
                Onlinedars.uz
            </a>
            </p>
        </div>
        <!-- SERTIFICATE END -->
      </div>
    </div>
  </template>
  
  <script setup>

  let inputName = ref("")
  let inputNumber = ref("")
  import { Pagination, Autoplay } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import { ref } from 'vue';
  const modules = [ Pagination, Autoplay]
  const  congratulation = ref(false)
  
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
    const registerModal = document.querySelector('.register-modal')
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
  
  
  </script>
  
  <style scoped></style>