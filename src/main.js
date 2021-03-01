import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/assets/js/axios'
import '@/assets/css/reset.css'
import Api from './assets/json/api.json'
import MixinFun from './assets/js/mixinFun'
import { Carousel, CarouselItem, Image, Row, Col, Divider } from 'element-ui'
import waterfall from 'vue-waterfall2'



Vue.use(waterfall)
Vue.use(MixinFun)
Vue.use(Carousel).use(CarouselItem).use(Image).use(Row).use(Col).use(Divider);

Vue.prototype.$axios = axios
Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
