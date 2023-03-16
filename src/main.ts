import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from '@/router';

// Importing jQuery and Popper from environment variables
import Popper from 'popper.js';

// Importing Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faInfo, faMapMarked, faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {faCalendarAlt, faEnvelope} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret,faEnvelope,faPhone,faMapMarked,faInfo,faCalendarAlt)

createApp(App)
    .use(router).component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
