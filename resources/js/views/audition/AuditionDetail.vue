<template>
  <div id="content">
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <!-- 제목태그 -->
          <div style="margin-left:200px" class="content-detail-content-info-left-subject">
            <h1>{{audition.title}}</h1>
          </div>
          <div style="margin-left:200px">
            <b-button variant="primary">
              마감일:  <b-badge variant="light">d</b-badge>
            </b-button>
            <b-button variant="warning">
              랭크: d
            </b-button>
          </div>
        </div>
      </div>
      
      <!-- 글 본문 태그 -->
      <div class="content-detail-content">
        <div>
          <img id="sub_image" v-if="state" :src="`${$store.state.serverPath}/storage/${audition.image}`" :alt="audition.title">
          <div id="text_area">
            <h1>영상과제</h1>
            <!-- <b-embed
              type="iframe"
              aspect="16by9"
              v-bind:src="auditions.video"
              allowfullscreen
            ></b-embed> -->
          </div>
        </div>
        
      </div>

      <div class="content-detail-button">
        <b-button variant="primary">수정</b-button>
        <b-button variant="danger">삭제</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import * as auditionService from '../../services/audition_service';

export default {
  name: "AuditionDetail",
  data() {

    const contentId = Number(this.$route.params.contentId);
    // params로 받은 게시글 아이디를 저장

    // const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    // 현재 게시글에 해당하는 데이터를 가져옴
    
    return {
      audition:[],
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
      cid:contentId,
      state:false
    };
    
  },

  mounted(){
        this.loadDetailAudition();
    },

  methods: {

    // 데이터 로드
    loadDetailAudition: async function(){
            try{
                const response=await auditionService.loadDetailAudition(this.cid);
                this.audition=response.data;
                this.state=true;
              
            }catch(error){
                this.flashMessage.error({
                    message: 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
                    time:5000
                });
            }
        },

    // 삭제를 수행하는 함수
    // deleteData() {
    //   const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
    //   // findIndex: 조건이 만족할 경우 index를 반환해줌

    //   data.Content.splice(content_index, 1)
    //   // 데이터 삭제 수행
      
    //   this.$router.push({
    //     path: '/board/free'
    //   })
    // },

    // 수정을 수행하는 함수
    // updateData() {
    //   this.$router.push({
    //     path: `/board/free/create/${this.contentId}`
    //   })
    // }

  }
};


</script>
<style scoped>

#text_area{
  width: 900px;
  height: 600px;
  border: 1px solid #ced4da;
  margin-left: 700px;
  margin-top: 40px;
}
#sub_image{
  width: 600px;
  height: 600px;
  margin-left: 30px;
  float: left;
}
.content-detail-content-info {
  border: 1px solid #ced4da;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 1420px;
  /* display: flex;
  flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid #ced4da;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 700px;
}
.content-detail-button {
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid #ced4da;
  margin-top: 1rem;
  padding: 2rem;
}
</style>