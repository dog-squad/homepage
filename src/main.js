import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome'

library.add(faArrowRight, faArrowLeft, faGithub, faSteam)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMeta)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
