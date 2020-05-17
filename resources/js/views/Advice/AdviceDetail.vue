<template>
  <div>
    <!-- <b-card>
      <div class="content">
        <div class="content-detail-content-info">
            <div class="content-detail-content-info-left">
              <img :src="user_img" alt="" width="50px" height="50px">
              <div class="content-detail-content-info-left-number">{{feedbackDetail.name}}</div>
            </div>
        </div>      
        <div class="content-detail-content">{{context}}</div>
       </div>
       <div class="content">
        <div class="content-detail-content-info">
            <div class="content-detail-content-info-left">
              <img :src="user_img" alt="" width="50px" height="50px">
              <div class="content-detail-content-info-left-number">{{expert_name}}</div>
            </div>
        </div>
        <div class="content-detail-content" v-if="reply_context==null">아직 피드백이 작성되지 않았습니다.</div>
        <div class="content-detail-content" v-else>{{reply_context}}</div>
       </div>    
    </b-card> -->
    <h1>데이터 먼저 봅시다</h1>
  </div>
</template>

<script>
import data from "./index.js";
import * as feedbackService from "../../services/feedback_service";

export default {
  name: "AdviceDetail",
  data() {
    const contentId = Number(this.$route.params.contentId);
    return {
      feedbackDetail:[],
      user:[],
      cid: contentId,
      };
  },
  mounted(){
        this.loadDetailFeedback();
  },
  methods: {
     loadDetailFeedback: async function(){
            try{
                const response=await feedbackService.loadDetailFeedback(this.cid);
                console.log('오디션 디테일1',response.data[0]);
                console.log('오디션 디테일2',response.data[1]);
                this.feedbackDetail.unshift(response.data);
                this.feedbackDetail=response.data; 
                console.log("데이터가 잘 왔는가 : ",this.feedbackDetail);


            }catch(error){
                this.flashMessage.error({
                    message: '데이터를 못받았음',
                    time:5000
             });
         }
     },
  }
};
</script>
<style scoped>

.content {
  border: 1px solid black;
  margin-top : 30px;
}
.content-detail-content-info {
  display: flex;
  justify-content: space-between;
}

.content-detail-content-info-left {
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-left:20px;
  margin-top:20px;
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
  margin-top: 1rem;
  padding-top: 1rem;
  height:auto;
  min-height: 300px;
  font-size: 2em;
  margin:10px 30px 30px 30px;
}

.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}

.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>