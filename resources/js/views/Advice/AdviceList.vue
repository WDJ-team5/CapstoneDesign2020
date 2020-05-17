<template>
  <div>
    <!-- <b-table striped hover :feedbackList="feedbackList" :per-page="perPage" :current-page="currentPage" :fields="fields"
      @row-clicked="rowClick">
      
    <template v-slot:cell(feedbackList.answer)="feedbackList">
      <b-badge variant="primary" v-if="feedbackList.answer">답변완료</b-badge>
      <b-badge variant="secondary" v-else>미답변</b-badge>
    </template>

      
    </b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination> -->

    <div>
      <table class="table">
          <tr>
              <thead>
                  <tr>
                      <td>번호</td>
                      <td>제목</td>
                      <td>작성일</td>
                      <td>답변</td>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(feedbackList, index) in feedbackList" :key="index">
                    <td>{{feedbackList.id}}</td>
                    <td>{{feedbackList.title}}</td>
                    <td>{{feedbackList.created_at}}</td>
                    <td>{{feedbackList.answer}}</td>
                  </tr>
              </tbody>
          </tr>
      </table>
    </div>


  </div>






</template>

<script>
import data from "./index.js";
import * as feedbackService from "../../services/feedback_service";

export default {
  name: "FeedbackList",
  data() {

    return {
      currentPage: 1, 
      perPage: 10, 
      fields: [
        {
          key: "id",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "created_at",
          label: "작성일"
        },
        {
          key: "answer",
          label: "답변"
        }
      ],
      feedbackList:[],
      feedbackData:{
                title : '',
                content : '',
                video : '',
                answer : '',
                answer_data : '',
                expert_id : '',
            },
      // items: items
    };
  },
  mounted(){
        this.loadFeedbackList();
  },
  methods: {
    loadFeedbackList: async function(){
            try{
                const response=await feedbackService.loadFeedbackList();
                console.log('응답내용',response.data);
                this.feedbackList.unshift(response.data);
                this.feedbackList=response.data; 
                console.log("데이터가 잘 왔는가 : ",this.feedbackList);


            }catch(error){
                this.flashMessage.error({
                    message: '데이터를 못받았음',
                    time:5000
             });
         }
     },
    rowClick(item, index, e) {
      this.$router.push({
        path: `/advice/detail/${item.content_id}`
      });
    },
    // writeContent() {
    //   this.$router.push({
    //     path: `/board/create`
    //   });
    // }
  },
  computed: {
    rows() {
      return this.feedbackList.length;
    }
  }
};

</script>


<style scoped>

</style>>