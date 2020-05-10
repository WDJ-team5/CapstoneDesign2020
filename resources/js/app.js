import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import {BootstrapVue} from 'bootstrap-vue'
import VueAgile from 'vue-agile';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';
import FlashMessage from '@smartweb/vue-flash-message';


Vue.use(BootstrapVue)
Vue.use(FlashMessage);


Vue.use(VueAgile);


new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
});

