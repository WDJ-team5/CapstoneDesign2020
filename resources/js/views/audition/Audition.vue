<template>
  <div>
    <!-- <h1>{{items.user_id}}</h1> -->
    <!-- <b-table striped hover :auditions="auditions" @row-clicked="rowClick"></b-table> -->
    <b-list-group id="items" >
        <b-list-group-item  id="item" href="#" active class="flex-column align-items-start" @click="rowClick(audition)" v-for="(audition,index) in auditions" :key="index">
            <div class="hovereffect">
                <!-- <img id="card-image" :src="audition.image"> -->
                <img id="card-image" :src="`${$store.state.serverPath}/storage/${audition.image}`" :alt="audition.title">
            </div>
            <div>
                <div>
                    <b-badge pill variant="primary">마감일:  {{audition.date}}</b-badge>
                </div>
                <div>
                    <b-badge pill variant="success">랭크: {{audition.selected}}</b-badge>
                </div>
                <div style="margin-top:12px">
                    <h5 sytle="margin-top:10px" class="mb-1">{{audition.title}}</h5>
                </div>
            </div>
        </b-list-group-item>
    </b-list-group>

    <b-button style="margin-top:10px;width:200px;height:60px" variant="dark" @click="writeContent">오디션 공고 등록</b-button>
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

        .hovereffect:hover .overlay:before
         {
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        }

    #items{
        width: 1800px;
        display: inline-block;
        margin:0;
        padding:0;
    }

   #item{
        width: 400px;
        height: 500px;
        float: left;
        color: black;
        background-color: white;
        border: 1px solid #ced4da;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        margin-left: 20px;
        margin-top: 10px;
        border-radius:5px;
    }

    #card-image{
        margin-top:3px;
        border-radius:5px;
        width: 350px;
        height: 400px;
    }
</style>