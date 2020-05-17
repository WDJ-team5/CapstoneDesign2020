import{http,httpFile} from './http_service';

export function createFeedback(data){
    return httpFile().post('/feedback', data);
}

export function loadFeedback() {
    return http().get('/feedback');
}

export function loadFeedbackList() {
    return http().get('/feedback/list');
}


