import Vue from 'vue';
import Router from 'vue-router';
import Page from './components/Page.vue';
import 
 
Vue.use(Router)
 
const routes = [
    {
        path: '/',
        name: 'page',
        component:Page
    }
];
 
const router = new Router({
    routes : routes
});
 
export default router;