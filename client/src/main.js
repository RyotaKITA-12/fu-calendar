import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://localhost:8888/'
axios.defaults.baseURL = 'http://3.112.17.9:8888/'
axios.defaults.withCredentials = true

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
