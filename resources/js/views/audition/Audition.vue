<template>
  <div id="container">
    <!-- <h1>{{items.user_id}}</h1> -->
    <!-- <b-table striped hover :auditions="auditions" @row-clicked="rowClick"></b-table> -->
    <div>
        <b-list-group id="audition-all" >

            <b-list-group-item  id="audition-set" href="#" active class="flex-column align-items-start" @click="rowClick(audition)" v-for="(audition,index) in auditions" :key="index">
                <div class="hovereffect card-image-box">
                    <!-- <img id="card-image" :src="audition.image"> -->
                    <img id="card-image" :src="`${$store.state.serverPath}/storage/${audition.image}`" :alt="audition.title">
                </div>
                <div class="audition-info">
                    <div style="margin-top:12px">
                        <h5 class="audition-title">{{audition.title}}</h5>
                    </div>
                    <div>
                        <b-badge pill variant="primary">마감일: 2020년 5월 15일{{audition.date}}</b-badge>
                    </div>
                    <div>
                        <b-badge pill variant="success">랭크: B랭크 이상 지원가능{{audition.selected}}</b-badge>
                    </div>
                </div>
            </b-list-group-item>

        </b-list-group>
    </div>

    <b-button class="audition-add-btn" variant="dark" @click="writeContent">오디션 공고 등록</b-button>
  </div>
    
</template>

<script>
import * as auditionService from '../../services/audition_service';

export default {
    name:'Audition',
    data() {
        // 게시판 최신 순 정렬
        // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})

        // 유저 네임 속성 추가(게시판의 유저아이디와 데이터의 유저아이디가 동일 할 경우에)
        // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
        
        return {
            // 게시글의 보여주고싶은 필드 보이도록 설정
            // fields:[
            //     {
            //         key:'content_id',
            //         label:'글번호'
            //     },
            //     {
            //         key:'title',
            //         label:'제목'
            //     },
            //     {
            //         key:'created_at',
            //         label:'작성일'
            //     },
            //     {
            //         key:'user_name',
            //         label:'글쓴이' 
            //     }
            // ],
        
            auditions:[],
            auditionData:{
                id:'',
                title:'',
                context: '',
                userId: 1,
                date:'',
                image:'',
                selected:'',
                video:'',
            },

            errors:{}
        }
    },

    mounted(){
        this.loadAudition();
    },

    methods:{
        loadAudition: async function(){
            try{
                const response=await auditionService.loadAudition();
                this.auditions.unshift(response.data);
                this.auditions=response.data.data; 
                console.log(this.auditions);
            }catch(error){
                this.flashMessage.error({
                    message: '에러가 발생했습니다!',
                    time:5000
                });
            }
        },

        // 오디션 클릭시
        rowClick(audition, index, e) {
            this.$router.push({
                path: `/auditiondetail/${audition.id}`
            })
        },

        // 오디션 생성
        writeContent(){
            this.$router.push({
                path:'/auditioncreate'
            })
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

    .hovereffect:hover .overlay:before {
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

    #audition-all {
        width: 1100px;
        display: inline-block;
        margin-top:40px;
        padding:0;
    }

    #audition-set {
        width: 250px;
        height: 370px;
        float: left;
        color: black;
        background-color: white;
        border: 1px solid #ced4da;
        padding: 0 0 0 0;
        margin-left: 20px;
        margin-top: 60px;
        border-radius:5px;
    }

    .card-image-box {
        width: 250px;
        height: 260px;
    }

    .card-image-box > img {
        width: 100%;
        height:100%;
    }

    .audition-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .audition-title {
        font-size:25px;
        font-weight:100;
    }

    .audition-add-btn {
        margin-top:60px;
        width:200px;
        height:60px;
        margin-top:50px;
    }
    

</style>