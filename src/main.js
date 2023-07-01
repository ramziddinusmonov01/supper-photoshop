import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import './assets/css/main.css';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { fas, far, fab} from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add( fab)
// FontAwesome ikonlarini qo'shing
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .mount("#app");

const app = createApp(App);

app.use(createPinia())
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)

.mount('#app')