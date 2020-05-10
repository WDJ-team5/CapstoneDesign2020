<template>
  <div id="content">
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <h1>{{contentId}}아이디 입니다.</h1>
          <!-- 제목태그 -->
          <div style="margin-left:200px" class="content-detail-content-info-left-subject">
            <h1>{{title}}</h1>
          </div>
          <div style="margin-left:200px">
            <b-button variant="primary">
              마감일:  <b-badge variant="light">{{date}}</b-badge>
            </b-button>
            <b-button variant="warning">
              랭크: {{rank}}
            </b-button>
          </div>
        </div>
      </div>
      
      <!-- 글 본문 태그 -->
      <div class="content-detail-content">
        <div>
          <img id="sub_image" :src="sub_image">
          <div id="text_area">
            <h1>영상과제</h1>
            <b-embed
              type="iframe"
              aspect="16by9"
              v-bind:src="video"
              allowfullscreen
            ></b-embed>
            <!-- <video ref="videoPlayer" class="video-js"></video> -->
          </div>
        </div>
        
      </div>

      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="danger" @click="deleteData">삭제</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
// import data from "@/data";
// import videojs from 'video.js';
export default {
  name: "ContentDetail",
  data() {

    const contentId = Number(this.$route.params.contentId);
    // params로 받은 게시글 아이디를 저장

    // const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    // 현재 게시글에 해당하는 데이터를 가져옴
    
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      date:contentData.date,
      rank:contentData.rank,
      sub_image:contentData.sub_image,
      video:contentData.video,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
        // 현재 contentData와 일치하는 유저 객체를 가져와서 해당 객체의 name속성을 가져옴
      created: contentData.created_at,
      images:['https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260']
    };
  },

  methods: {
    // 삭제를 수행하는 함수
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      // findIndex: 조건이 만족할 경우 index를 반환해줌

      data.Content.splice(content_index, 1)
      // 데이터 삭제 수행
      
      this.$router.push({
        path: '/board/free'
      })
    },

    // 수정을 수행하는 함수
    updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentId}`
      })
    }
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