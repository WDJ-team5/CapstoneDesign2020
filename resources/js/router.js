import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes=[
    {
        path:'/',
        name:'welcome',
        component:Welcome
    },
    {
        path:'/categories',
        name:'categories',
        component:()=>import('./views/Categories.vue')
    },
    {
        path:'/userlist',
        name:'userlist',
        component:()=>import('./components/UserList.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('./components/Login.vue')
    },
    {
        path:'/signselect',
        name:'signselect',
        component:()=>import('./components/SignSelect.vue')
    },
    {
        path:'/usersignup',
        name:'usersignup',
        component:()=>import('./components/UserSignup.vue')
    },
    {
        path:'/companysignup1',
        name:'companysignup1',
        component:()=>import('./components/CompanySignup1.vue')
    },
    {
        path:'/companysignup2',
        name:'companysignup2',
        component:()=>import('./components/CompanySignup2.vue')
    },

    {
        path:'/audition',
        name:'audition',
        component:()=>import('./components/Audition.vue')
    },
    {
        path: '/auditiondetail/:contentId',
        name: 'AuditionDetail',
        component:()=>import('./components/AuditionDetail.vue')
    },
    {
        path: '/auditioncreate/:contentId?',
        name: 'AuditionCreate',
        component:()=>import('./components/AuditionCreate.vue')
      },
]

const router=new Router({
    routes:routes
});

export default router;