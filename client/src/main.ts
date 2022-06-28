import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(store)
  .use(VueAxios, axios)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
