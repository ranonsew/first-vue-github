import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";

Vue.prototype.$http = axios; // for some reason can't use axios on its own?

import "@fortawesome/fontawesome-free/js/all";

createApp(App).use(store).use(router).mount("#app");
