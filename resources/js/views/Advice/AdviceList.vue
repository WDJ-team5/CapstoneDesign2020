<template>
  <div class="advice">
    <!-- <b-table striped hover :feedbackList="feedbackList" :per-page="perPage" :current-page="currentPage" :fields="fields"
      @row-clicked="rowClick">
      
    <template v-slot:cell(feedbackList.answer)="feedbackList">
      <b-badge variant="primary" v-if="feedbackList.answer">답변완료</b-badge>
      <b-badge variant="secondary" v-else>미답변</b-badge>
    </template>

      
    </b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination> -->

    <div class="table-box">
      <table class="table" width="950">
        <!-- <colgroup>
          <col width="8%" />
          <col width="40%" />
          <col width="26%" />
          <col width="16%" />
        </colgroup> -->
        <thead>
            <tr class="top-border">
                <td class="cell_padding right-border">番号</td>
                <td class="cell_padding right-border">タイトル</td>
                <td class="cell_padding right-border">作成日</td>
                <td class="cell_padding">答弁</td>
            </tr>
        </thead>
        <tbody>
          <div class="test" v-for="(feedbackList, index) in feedbackList.slice(10*(currentPage-1),10*(currentPage))" :key="index" >

            <tr @click="rowClick(feedbackList.id,feedbackList.expert_id)"> 
                  <td v-b-toggle="'collapse-'+index">
                      <div class="cell_padding">{{feedbackList.id}}</div>
                  </td>
 
                  <td v-b-toggle="'collapse-'+index">
                    <div>{{feedbackList.title}}</div>
                  </td>
   
                  <td v-b-toggle="'collapse-'+index">
                    <div class="cell_padding">{{String(feedbackList.created_at).substr(0, 10)}}</div>
                  </td>
                
                  <td v-b-toggle="'collapse-'+index">
                    <div class="cell_padding">
                      <b-badge variant="secondary" v-if="feedbackList.answer==null">答弁未完了</b-badge>
                      <b-badge variant="primary" v-else>答弁完了</b-badge>
                    </div>     
                  </td>
            </tr>

            <tr>
              <td class="td-detail" colspan='4'>
                <div class="detail">
                  <b-collapse :id="'collapse-'+index">
                    <AdviceDetail v-if="isActive1" v-bind:propsdata="detail"></AdviceDetail>
                  </b-collapse>
                </div>
              </td>
            </tr>

          </div>
        </tbody>
      </table>
    </div>

    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :items="feedbackList"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      ></b-pagination>
    </div>

  </div>

</template>

<script>
import data from "./index.js";
import AdviceDetail from "./AdviceDetail.vue";
import * as feedbackService from "../../services/feedback_service";

export default {
  name: "AdviceList",
  data() {

    return {
      perPage: 10,
      currentPage: 1,
      isActive1:false,
      ActiveIndex:[],
      fields: [
        {
          key: "id",
          label: "番号"
        },
        {
          key: "title",
          label: "タイトル"
        },
        {
          key: "created_at",
          label: "作成日"
        },
        {
          key: "answer",
          label: "答弁"
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
      detail:[],
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
    // rowClick(cid,eid) {
    //   this.$router.push({
    //     path: `/advice/detail/${cid}/${eid}`
    //   });
    // },
    // writeContent() {
    //   this.$router.push({
    //     path: `/board/create`
    //   });
    // }
    rowClick(cid, eid) {
      this.isActive1 =!this.isActive1;
      this.detail.unshift(eid);
      this.detail.unshift(cid);
      // console.log("rowClick은 실행되었음");
      // console.log("eid : "+eid+", cid : "+cid);
      // console.log(this.detail[0]+""+this.detail[1]);
    },
  },
  computed: {
    rows() {
      return this.feedbackList.length;
    }
  },
  components: {
    AdviceDetail
  },
};
</script>

<style scoped>
    .advice {
      width: 100%;
      height: auto;
      margin-bottom:30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .table-box {
      width:950px;
    }

    table {
      width: 950px;
    }


    td:before {
        content: attr(data-label);
        float: left;
    }
 
 
    /* 
     * Let's add a little more styling to make the table look clean
     */
     table {
         border: 0;
     }
 
    table thead {
        background-color: lightgray;
    }
 
    table tr {
        margin-bottom: 30px;
    }

    .cell_padding {

      text-align:center;


    }

    /* .right-border {
      border-right: solid rgb(172, 172, 172) 2px;
      border-radius: 10px;

    } */

    .top-border {
      border-top: solid rgb(194, 193, 193) 3px;
    }

    .test {
      display:contents;
    }

    .detail {
      display:contents;

    }

    .td-detail {
      padding:0%;
    }

</style>