import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ExtJarallaxBag from "./modules/jarallax/main";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */

import {
    faUser,
    faUsers,
    faUserSecret
} from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faUser);
library.add(faUsers);
library.add(faUserSecret);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");

// Jarallax setting
const jarallax = new ExtJarallaxBag();
jarallax.setSpeed(0.3);
