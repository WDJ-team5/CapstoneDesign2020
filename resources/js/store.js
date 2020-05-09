import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
    state:{
        apiURL:'http://localhost:8000/api',
        serverPath:'http//localhost:8000'
=======
    state: {
        // apiURL: 'http://localhost:8000/api',
        // serverPath: 'http://localhost:8000'
        apiURL: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000'
>>>>>>> 41e8457550253e09a4a58b48ecf605cef1df968f
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
})