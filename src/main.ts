import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueClickAway from 'vue3-click-away';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.scss';

const app = createApp(App);

const axiosInstance = axios.create({
  proxy: false,
  baseURL: 'https://wind-factory-api.herokuapp.com',
});

app.use(store).use(router).use(VueAxios, axiosInstance)
  .use(VueClickAway)
  .use(VueLoading)
  .mount('#app');
