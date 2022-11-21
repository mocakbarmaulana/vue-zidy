import { createApp } from "vue"
import { vfmPlugin } from "vue-final-modal"
import App from "./App.vue"
import "./index.css"
import router from "./router"
import store from "./store"

createApp(App)
    .use(vfmPlugin)
    .use(router).use(store).mount("#app")
