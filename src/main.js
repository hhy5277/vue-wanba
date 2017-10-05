// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.time
Vue.prototype.setInterval
/* eslint-disable no-new */

// 登录验证
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    if(!store.state.user){
      next()
    }else{
      next('/aboutme')
    }
  } else {
    if (!store.state.user && to.path !== "/") {
      next('/login')
    } else {
      next()
    }
  }
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})