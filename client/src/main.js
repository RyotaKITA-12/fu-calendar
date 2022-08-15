import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';

Vue.use(vuetify)

Vue.config.productionTip = false

const config = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APPID,
    measurementId: process.env.VUE_APP_MEASUREMENTID,
}

// firebase.initializeApp(config)
initializeApp(config)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
