import store from '../store';
import axios from 'axios';

export function http(){
    return axios.create({
        baseURL: store.state.apiURL
    });
}

export function httpFile(){
    return axios.create({
<<<<<<< HEAD
        baseURL:store.state.apiURL,
        headers:{
            'Content-Type':'multipart/form-data'
=======
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data'
>>>>>>> 41e8457550253e09a4a58b48ecf605cef1df968f
        }
    });
}