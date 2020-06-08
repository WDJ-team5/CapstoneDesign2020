<template>
  <div id="container">
    <!-- <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table> -->
    <b-dropdown id="dropdown-text" text="장르선택" class="m-2">
        <b-dropdown-item-button @click="idol()">아이돌</b-dropdown-item-button>
        <b-dropdown-item-button @click="pop()">팝핀</b-dropdown-item-button>
    </b-dropdown>
    <div>
        
        <b-list-group id="lecture-all" >

            <b-list-group-item id="lecture-set" href="#" active class="flex-column align-items-start" @click="rowClick(lecture)" v-for="(lecture,index) in paginatedData" :key="index">
                <div class="hovereffect lecture-image-box">
                    <img id="card-image" :src="`${$store.state.serverPath}/storage/${lecture.image}`" :alt="lecture.title">
                </div>
                <div class="lecture-info">
                    <div style="margin-top:12px">
                        <h5 sytle="lecture-title" class="mb-1">{{lecture.title}}</h5>
                    </div>
                    <div>
                        <b-badge pill variant="primary">장르: {{lecture.genre.genre_name}}</b-badge>
                    </div>
                    <div>
                        <b-badge pill variant="success">난이도: {{lecture.level.level_name}}</b-badge>
                    </div>
                </div>
            </b-list-group-item>

        </b-list-group>

        <div class="btn-cover">
          <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            이전
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            다음
          </button>
        </div>
    </div>

    <b-button class="lecture-add-btn" variant="dark">댄스강의 등록</b-button>
  </div>
    
</template>

<script>
import * as lectureService from '../../services/lecture_service';

export default {
    name:'Lecture',
    data() {
        return {
            pageNum: 0,
            lectures:[],
            lecturesa:[],
            lecturesb:[],
            lecturesc:[],
            lecturesidol:[],
            lecturespop:[],
            lectureData:{
                title:'',
                content:'',
                image:''
            },
        };
    },

    props:{
        pageSize: {
        type: Number,
        required: false,
        default: 2
        }
    },
    
    mounted(){
        this.loadLecture();
    },
    methods:{
        loadLecture: async function(){
            try{
                const response=await lectureService.loadLecture();
                // this.lectures.unshift(response.data);
                this.lectures=response.data;
                // console.log(...this.lectures);
                // console.log(this.lectures[0].genre_id);


                for(var i=0;i<this.lectures.length;i++){
                // 아이돌 장르
                if(this.lectures[i].genre_id==1){
                    this.lecturesidol.push(this.lectures[i]);
                // 팝핀 장르
                }else{
                    this.lecturespop.push(this.lectures[i]);
                }
            }

            }catch(error){
                this.flashMessage.error({
                    message: '에러가 발생했습니다!',
                    time:5000
                });
            }
        },
        rowClick(item, index, e) {
            this.$router.push({
                path: `/lecturePlay/${item.id}`
            })
        },
        nextPage () {
        this.pageNum += 1;
        },
        prevPage () {
        this.pageNum -= 1;
        },
        idol(){
        this.lectures=this.lecturesidol;
        },
        pop(){
        this.lectures=this.lecturespop;
        },
    },

    computed:{
        // 강좌 데이터 길이 측정
        pageCount () {
        let listLeng = this.lectures.length,
            listSize = this.pageSize,
            page = Math.floor(listLeng / listSize);
        if (listLeng % listSize > 0) page += 1;
        
        return page;
        },

        // 오디션 데이터 길이 나누기
        paginatedData () {
        const start = this.pageNum * this.pageSize,
                end = start + this.pageSize;
        // console.log(this.lectures.slice(start, end)); 
        return this.lectures.slice(start, end);
        },
    }
};
</script>
    
<style>


    .hovereffect:hover img {
        opacity: 0.6;
        filter: alpha(opacity=60);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        }

        .hovereffect:hover .overlay:before
         {
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        }

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
    }

    #lecture-all {
        width: 1100px;
        display: inline-block;
        margin-top:40px;
        padding:0;
    }

    #lecture-set {
        width: 250px;
        height: 250px;
        float: left;
        color: black;
        background-color: white;
        border: 1px solid #ced4da;
        padding: 0 0 0 0;
        margin-left: 20px;
        margin-top: 60px;
        border-radius:5px;
    }

    .lecture-image-box {
        width: 250px;
        height: 150px;
    }

    .lecture-image-box > img {
        width: 100%;
        height:100%;
    }

    .lecture-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lecture-title {
        font-size:25px;
        font-weight:100;
    }

    .lecture-add-btn {
        margin-top:60px;
        width:200px;
        height:60px;
        margin-top:50px;
    }

        button {
        display: inline-block;
        width: 152px;
        height: 48px;
        border: none;
        background: #ed1c24;
        color: #fff;
        font-size: 16px;
        line-height: 1;
    }

    #button_area{
    position: relative;
    margin-top: 30px;
    font-size: 0;
    line-height: 0;
    text-align: center;
    }
    
</style>