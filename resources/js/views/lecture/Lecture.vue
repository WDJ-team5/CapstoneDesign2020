<template>
  <div>
    <!-- <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table> -->
    <b-list-group id="items" >
        <b-list-group-item @click="rowClick(items)" id="item" href="#" active class="flex-column align-items-start" v-for="(items) in items" :key="items.name">
            <div class="hovereffect">
                <img id="card-image" :src="items.image">
            </div>
            <div>
                <div>
                    <b-badge pill variant="primary">장르: </b-badge>
                </div>
                <div>
                    <b-badge pill variant="success">난이도: </b-badge>
                </div>
                <div style="margin-top:12px">
                    <h5 sytle="margin-top:10px" class="mb-1">{{items.title}}</h5>
                </div>
            </div>
        </b-list-group-item>
    </b-list-group>

    <b-button style="margin-top:10px;width:200px;height:60px" variant="dark" @click="writeContent">댄스강의 등록</b-button>
  </div>
    
</template>

<script>

export default {
    name:'Lecture',
    data() {
        // 게시판 최신 순 정렬
        // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})

        // 유저 네임 속성 추가(게시판의 유저아이디와 데이터의 유저아이디가 동일 할 경우에)
        // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
        
        return {
            // 게시글의 보여주고싶은 필드 보이도록 설정
            fields:[
                {
                    key:'title',
                    label:'제목'
                },
                {
                    key:'created_at',
                    label:'작성일'
                },
            ],
            items: [
                {
                    content_id:1,
                    user_id:1,
                    title:'스텝 기초',
                    context:'아직 미정입니다',
                    date:'2019-03-29',
                    rank:'A랭크 이상',
                    created_at:'2019-01-01 13:11:42',
                    updated_at:null,
                    video:'',
                    image:'https://i.ytimg.com/vi/7VJME1RxPR4/maxresdefault.jpg'
                }
        ]
        };
    },
    methods:{
        rowClick(item, index, e) {
            this.$router.push({
                path: `/lecturedetail//${item.content_id}`
            })
        },
        writeContent(){
            this.$router.push({
                path:'/lecturecreate'
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