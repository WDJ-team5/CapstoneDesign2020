import {http, httpFile} from './http_service';

export function createSession(data) {

    return http().post('/session', data);
}

// export function loadCategories() {

//     return http().get('/categories');
// }