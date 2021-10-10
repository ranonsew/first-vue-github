import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue"; // the virtual dom app
import router from "./router"; // vue router for single page application routing
import store from "./store"; // vuex store as a state management system
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap because why not
import "bootstrap"; // more bootstrap because alright
import "@fortawesome/fontawesome-free/js/all"; // font awesome icons
import axios from "axios";

// Vue.prototype.$http = axios; // for some reason can't use axios on its own?

const application = createApp(App);
application.use(store).use(router).mount("#app");
application.config.globalProperties.$http = axios;
// this.$http to get it working lmao, got it when reading the vuex doc
