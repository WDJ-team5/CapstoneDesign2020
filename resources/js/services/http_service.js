import store from '../store';
import axios from 'axios';

export function http(){
    return axios.create({
        baseURL:store.state.apiURL
    });
}

// 내용
export function httpFile(){
    return axios.create({
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}