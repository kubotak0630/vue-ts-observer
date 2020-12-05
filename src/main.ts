import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';

import { globalStore } from '@/store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$store = globalStore;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
