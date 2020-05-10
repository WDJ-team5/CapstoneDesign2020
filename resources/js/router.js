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
        component:()=>import('./views/UserList.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('./views/auth/Login.vue')
    },
    {
        path:'/signselect',
        name:'signselect',
        component:()=>import('./views/auth/SignSelect.vue')
    },
    {
        path:'/usersignup',
        name:'usersignup',
        component:()=>import('./views/auth/UserSignup.vue')
    },
    {
        path:'/companysignup1',
        name:'companysignup1',
        component:()=>import('./views/auth/CompanySignup1.vue')
    },
    {
        path:'/companysignup2',
        name:'companysignup2',
        component:()=>import('./views/auth/CompanySignup2.vue')
    },

    {
        path:'/audition',
        name:'audition',
        component:()=>import('./views/audition/Audition.vue')
    },
    {
        path: '/auditiondetail/:contentId',
        name: 'AuditionDetail',
        component:()=>import('./views/audition/AuditionDetail.vue')
    },
    {
        path: '/auditioncreate',
        name: 'AuditionCreate',
        component:()=>import('./views/audition/AuditionCreate.vue')
      },
]

const router=new Router({
    routes:routes
});

export default router;