import{http,httpFile} from './http_service';

// 댄스강좌 리스트 로드
export function loadLecture() {
    return http().get('/lecture');
}

// 댄스강좌 하나 로드
export function loadLectureData(data){
    let anything = "/lecture/"+data;
    return http().get(anything)
}
