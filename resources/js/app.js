import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {BootstrapVue} from 'bootstrap-vue'
import VueAgile from 'vue-agile';
import VueAxios from 'vue-axios';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';
import FlashMessage from '@smartweb/vue-flash-message';
import Paginate from 'vuejs-paginate'

Vue.use(BootstrapVue)
Vue.use(FlashMessage);
Vue.use(VueAgile);
Vue.use(VueAxios, axios);
Vue.component('paginate', Paginate)

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
});

