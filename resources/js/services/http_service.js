import store from '../store';
import axios from 'axios';

export function http(){
    return axios.create({
<<<<<<< HEAD
        baseURL:store.state.apiURL
    });
}

// 내용
export function httpFile(){
    return axios.create({
        headers:{
            'Content-Type':'multipart/form-data'
=======
        baseURL: store.state.apiURL
    });
}

export function httpFile(){
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data'
>>>>>>> ahn
        }
    });
}