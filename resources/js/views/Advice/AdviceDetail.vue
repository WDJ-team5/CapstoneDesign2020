<template>
  <div>
    <b-card>
      <div class="content">
        <div class="content-detail-content-info">
            <div class="content-detail-content-info-left">
              <img :src="user_img" alt="" width="50px" height="50px">
              <div class="content-detail-content-info-left-number">{{user_name}}</div>
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
    </b-card>
  </div>
</template>

<script>
import data from "./index.js";

export default {
  name: "AdviceDetail",
  data() {

    const contentId = Number(this.$route.params.contentId);
    const contentData = data.Content.filter(
      contentItem => contentItem.content_id === contentId
    )[0];

 
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user_name: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at,
      expert_name: data.Expert.filter(item => item.expert_id === contentData.expert_id)[0]
        .name,
      reply_context: contentData.reply_context,
      updated: contentData.updated_at,
      expert_img: data.Expert.filter(item => item.expert_id === contentData.expert_id)[0]
        .img,
      user_img: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .img,
      };

    
  },
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(
        contentItem => contentItem.content_id === this.contentId
      );
      data.Content.splice(content_index, 1); // 데이터 삭제
      this.$router.push({
        path: "/"
      });
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