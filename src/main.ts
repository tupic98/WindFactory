import { createApp } from 'vue';
import VueClickAway from 'vue3-click-away';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.scss';

createApp(App).use(store).use(router).use(VueClickAway)
  .mount('#app');
