import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
    sate:{
        apiURL:'http://localhost:8000/api',
        serverPath:'http//localhost:8000'
    },
    mutations:{},
    actions:{}
=======
    state: {
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000'
    },

    // state: {
    //     apiURL: 'http://192.168.0.6:8000/api',
    //     serverPath: 'http://192.168.0.6:8000'
    // },

    // state: {
    //     apiURL: 'http://localhost:9000/api',
    //     serverPath: 'http://localhost:9000'
    // },
    mutations: {},
    actions: {}
>>>>>>> ahn
})