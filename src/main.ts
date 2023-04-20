import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ExtJarallaxBag from "./modules/jarallax/main";

import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

// Jarallax setting
const jarallax = new ExtJarallaxBag();
jarallax.setSpeed(0.3);
