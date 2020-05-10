import{http,httpFile} from './http_service';

// 댄스강좌 리스트 로드
export function loadLecture() {
    return http().get('/lecture');
}
