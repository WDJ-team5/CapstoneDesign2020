import{http,httpFile} from './http_service';

export function createAudition(data){
    return httpFile().post('/audition', data);
}

export function loadAudition() {
    return http().get('/audition');
}