import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)
// eslint-disable no-new
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHIOvq8Xi6qUJm5a0LJd8q1fmSGT0UePQ',
      authDomain: 'i-meetup-3039d.firebaseapp.com',
      databaseURL: 'https://i-meetup-3039d.firebaseio.com',
      projectId: 'i-meetup-3039d',
      storageBucket: 'i-meetup-3039d.appspot.com',
      messagingSenderId: '777672343188',
      appId: '1:777672343188:web:a6701c7e1af37f73027e81',
      measurementId: 'G-7RVSQHZ3BW'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
