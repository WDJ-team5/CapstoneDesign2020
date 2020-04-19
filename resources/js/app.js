require('./bootstrap');
window.Vue = require('vue');
window.Vuetify = require('vuetify');

Vue.component('test-component', require('./components/TestComponent.vue').default);
Vue.component('home-component', require('./components/HomeComponent.vue').default);
Vue.component('page-component', require('./components/Page.vue').default);

Vue.use(Vuetify);

const app = new Vue({
	el: '#app'
})