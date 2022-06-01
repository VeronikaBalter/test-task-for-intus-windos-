import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/css/tailwind.scss';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;
const ToastedOptions = {
  position: 'top-center',
  duration: 1500,
  theme: 'bubble'
};
Vue.use(Vuelidate);
Vue.use(Toasted, ToastedOptions);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
