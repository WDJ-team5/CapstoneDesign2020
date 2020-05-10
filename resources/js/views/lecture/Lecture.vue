<template>
  <div>
    <!-- <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table> -->
    <b-list-group id="items" >
        <b-list-group-item id="item" href="#" active class="flex-column align-items-start" @click="rowClick(lecture)" v-for="(lecture,index) in lectures" :key="index">
            <div class="hovereffect">
                <img id="card-image" :src="`${$store.state.serverPath}/storage/${lecture.image}`" :alt="lecture.title">
            </div>
            <div>
                <div>
                    <b-badge pill variant="primary">장르: </b-badge>
                </div>
                <div>
                    <b-badge pill variant="success">난이도: </b-badge>
                </div>
                <div style="margin-top:12px">
                    <h5 sytle="margin-top:10px" class="mb-1">{{lecture.title}}</h5>
                </div>
            </div>
        </b-list-group-item>
    </b-list-group>

    <b-button style="margin-top:10px;width:200px;height:60px" variant="dark">댄스강의 등록</b-button>
  </div>
    
</template>

<script>
import * as lectureService from '../../services/lecture_service';

export default {
    name:'Lecture',
    data() {
        return {
            lectures:[],
            lectureData:{
                title:'',
                content:'',
                image:''
            },
        };
    },
    
    mounted(){
        this.loadLecture();
    },
    methods:{
        loadLecture: async function(){
            try{
                const response=await lectureService.loadLecture();
                this.lectures.unshift(response.data);
                this.lectures=response.data.data; 
                console.log(this.lectures);
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
        // writeContent(){
        //     this.$router.push({
        //         path:'/lecturecreate'
        //     })
        // },
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