import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Home from "./views/Home";
import About from "./views/About"
import gosti from "./views/gosti";
import layout from "./layouts/layout";
import user from "./views/user";
import Hashtags from "./views/Hashtags";


Vue.component('home', Home)
Vue.component("about", About)
Vue.component('gosti', gosti)
Vue.component("app", App)
Vue.component('layout', layout)
Vue.component('user', user)
Vue.component('hashtags', Hashtags)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
