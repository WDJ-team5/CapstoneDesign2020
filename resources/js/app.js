import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {BootstrapVue} from 'bootstrap-vue'
import VueAgile from 'vue-agile';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap';

Vue.use(BootstrapVue)
Vue.use(VueAgile);


new Vue({
    el:'#app',
    router,
    render:h=>h(App)
});

