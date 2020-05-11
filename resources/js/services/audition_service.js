import{http,httpFile} from './http_service';

// 오디션 생성
export function createAudition(data){
    return httpFile().post('/audition', data);
}

// 오디션 리스트 로드
export function loadAudition() {
    return http().get('/audition');
}

// 오디션 상세보기 로드
export function loadDetailAudition(data) {
    let anything="/audition/"+data;
    console.log(anything);
    return http().get(anything);
}

// 오디션 삭제하기
export function deleteAudition(id){
    return http().delete(`audition/${id}`);
}