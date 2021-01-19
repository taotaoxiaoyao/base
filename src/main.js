import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import mixin from '@/mixin/index'
import VueBus from 'vue-bus'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

// import '@/icons' // icon
import '@/permission' // permission control
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
