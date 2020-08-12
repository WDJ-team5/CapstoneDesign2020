<template>
  <div id="container">
    <!-- <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table> -->
        <div id="drop_area">
            <!-- <b-dropdown id="dropdown-text" text="장르선택" class="m-2">
                <b-dropdown-item-button @click="idol()">아이돌</b-dropdown-item-button>
                <b-dropdown-item-button @click="pop()">팝핀</b-dropdown-item-button>
            </b-dropdown> -->
            <h3 style="margin-top:12%;margin-left:25%;">難易度選択</h3>
            <ul>
                <li @click="leva()">Aランク</li>
                <li @click="levb()">Bランク</li>
                <li @click="levc()">Cランク</li>
            </ul>

            <h3 style="margin-top:10%;margin-left:30%;">ジャンル選択</h3>
            <ul>
                <li @click="idol()">男子アイドル </li>
                <li @click="widol()">女子アイドル </li>
                <li @click="hiphop()">ヒップホップダンス</li>
                <li @click="bboy()">ストリートダンス</li>
                <li @click="breakd()">ワクキングダンス</li>
                <li @click="pop()">パッピン</li>
            </ul>

            

        </div>
        <b-list-group id="lecture-all" >

            <b-list-group-item id="lecture-set" href="#" active class="flex-column align-items-start" @click="rowClick(lecture)" v-for="(lecture,index) in paginatedData" :key="index">
                <div class="hovereffect lecture-image-box">
                    <img id="card-image" :src="`${$store.state.serverPath}/storage/${lecture.image}`" :alt="lecture.title" style="width:360px;height:200px">
                </div>
                <div class="lecture-info">
                    <div id="title_box" class="box">
                        <h5 sytle="lecture-title" class="mb-1">{{lecture.title}}</h5>
                    </div>
                    <div id="level_box" class="box">
                        <img v-if="lecture.level.level_name=='C'" style="width:230px" src="/images/15.png">
                        <img v-else-if="lecture.level.level_name=='B'" style="width:230px" src="/images/30.png">
                        <img v-else style="width:230px" src="/images/45.png">
                    </div>
                    <div id="genre_box" class="box">
                        <img v-if="lecture.genre.genre_name=='man_idol'" style="width:220px;height:160px;"  src="/images/kpop.png">
                        <img v-if="lecture.genre.genre_name=='girl_idol'" style="width:220px;height:160px;"  src="/images/kpop2.jpg">
                        <img v-if="lecture.genre.genre_name=='poppin'" style="width:220px;height:160px;" src="/images/poppin.png">
                        <img v-if="lecture.genre.genre_name=='b-boying'" style="width:200px;height:100px;" src="/images/bboy.png">
                        <img v-if="lecture.genre.genre_name=='hiphop'" style="width:220px;height:160px;" src="/images/hiphop.png">
                        <img v-if="lecture.genre.genre_name=='waaking'" style="width:220px;height:160px;" src="/images/waak.png">

                    </div>
                    
                </div>
            </b-list-group-item>

        </b-list-group>

        <div class="btn-cover">
          <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            前のページ
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} ページ</span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            次のページ
          </button>
        </div>
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
            lectureswidol:[],
            lecturespop:[],
            lecturesbboy:[],
            lectureship:[],
            lecturesbreak:[],
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
        default: 5
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
                console.log(...this.lectures);
                // console.log(this.lectures[0].genre_id);

            // 난이도 분류
            for(var i=0;i<this.lectures.length;i++){
            
            if(this.lectures[i].level.level_name=='C'){
                this.lecturesc.push(this.lectures[i]);
            }else if(this.lectures[i].level.level_name=='B'){
                this.lecturesb.push(this.lectures[i]);
            }else{
                this.lecturesa.push(this.lectures[i]);
                }
            }

                

                // 장르 분류
                for(var i=0;i<this.lectures.length;i++){
                // 아이돌 장르
                if(this.lectures[i].genre_id==1){
                    this.lecturesidol.push(this.lectures[i]);
                // 팝핀 장르
                }else if(this.lectures[i].genre_id==2){
                    this.lecturespop.push(this.lectures[i]);
                // 비보이
                }else if(this.lectures[i].genre_id==3){
                    this.lecturesbboy.push(this.lectures[i]);
                // 힙합
                }else if(this.lectures[i].genre_id==4){
                    this.lectureship.push(this.lectures[i]);
                // 브레이크댄스
                }else if(this.lectures[i].genre_id==5){
                    this.lecturesbreak.push(this.lectures[i]);
                // 여자아이돌
                }else if(this.lectures[i].genre_id==6){
                    this.lectureswidol.push(this.lectures[i]);
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
        widol(){
        this.lectures=this.lectureswidol;
        },
        hiphop(){
        this.lectures=this.lectureship;    
        },
        bboy(){
        this.lectures=this.lecturesbboy;    
        },
        breakd(){
        this.lectures=this.lecturesbreak;  
        },
        pop(){
        this.lectures=this.lecturespop;
        },
        leva(){
        this.lectures=this.lecturesa;
        },
        levb(){
        this.lectures=this.lecturesb;
        },
        levc(){
        this.lectures=this.lecturesc;
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
    body{
        line-height: 1.5;
    }
    

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
        width:100%;
        height: 1500px;
        align-items: center;
        margin-bottom: 70px;
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

    #drop_area{
        float:left;
        width:20%;
        height: 1500px;
        background: #222;
        color:#fff;
    }

    #drop_area > ul{
        padding: 15px;
        margin: 0;
        list-style: none;
        color:#fff;
    }

    #drop_area ul > li{
        height: 2.5em;
        position: relative;
        text-align: left;
        vertical-align: middle;
        cursor: pointer;
        margin-bottom:30px;
        padding: 5px 0;
        border-bottom: dotted 1px #ccc;
    }

     #lecture-all {
        width: 75%;
        height: 1500px;
        margin-left:30px;
        vertical-align: top;
        display: inline-block;
        padding:0;
    }


     #lecture-set {
        color: black;
        background-color: white;
        border: 1px solid #ced4da;
        height: 230px;
        padding: 0 0 0 0;
        margin-left: 20px;
        margin-bottom: 60px;
        border-radius:5px;
    }

    .lecture-image-box{
        width:10%;
        float:left;
        margin-top: 10px;
        margin-right: 20%;
    }

    .lecture-info{
        width:70%;
        
        float:left;
    }

    #title_box{
        margin-left:10%;
        width:200px;
    }
    #genre_box{
        margin-left:7%;
        width:200px;
    }
    #level_box{
        margin-left:7%;
        width:200px;
    }
    .box{
        margin-top: 6%;
        display: inline-block;
    }

    .btn-cover{
        text-align: center;
    }

    
</style>