import{http,httpFile} from './http_service';

export function createAdvice(data){
    return httpFile().post('/advice', data);
}

export function loadAdvice() {
    return http().get('/advice');
}


