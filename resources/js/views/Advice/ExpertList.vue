<template>
  <div class="expert">

    <div class="expert-search">
      <div class="input-group">
        <input type="text" v-model="search" class="form-control">
        <div class="input-group-prepend">
          <button @click.prevent="searchExpert()" class="btn search"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>



    <div v-if="showsearch==true">
      <div class="expert-set">
        <div id="container" class="expert-imgList">
          <ExpertItem v-bind:propsdata="caris" v-on:active="active1" />
        </div>
        <div class="expert-profile" v-if="isActive1">
          <ExpertDetail v-bind:propsdata="data[0]"></ExpertDetail>
        </div>
      </div>
    </div>



    <div v-if="showsearch==false">
      <div class="expert-set">
        <h1>#アイドルダンス</h1>
        <div id="container" class="expert-imgList">
          <ExpertItem v-bind:propsdata="idolExp" v-on:active="active1" />
        </div>
        <div class="expert-profile" v-if="isActive1">
          <ExpertDetail v-bind:propsdata="data[0]"></ExpertDetail>
        </div>
      </div>


      <div class="expert-set">
        <h1>#ヒップホップ</h1>
        <div id="container" class="expert-imgList">
          <ExpertItem v-bind:propsdata="hiphopExp" v-on:active="active2" />
        </div>
        <div class="expert-profile" v-if="isActive2">
          <ExpertDetail v-bind:propsdata="data[0]"></ExpertDetail>
        </div>
      </div>


      <div class="expert-set">
        <h1>#パッピン</h1>
        <div id="container" class="expert-imgList">
          <ExpertItem v-bind:propsdata="poppinExp" v-on:active="active3" />
        </div>
        <div class="expert-profile" v-if="isActive3">
          <ExpertDetail v-bind:propsdata="data[0]"></ExpertDetail>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ExpertItem from "./ExpertItem.vue";
import ExpertDetail from "./ExpertDetail.vue";
import * as feedbackService from "../../services/feedback_service";

export default {
  data () {


    return {
      experts:[],
      expertData:{
        userid: "",
        name: "",
        image: "",
        introduction: "",
        sns: "",
        area: "",
        company_name: "",
      },
      isActive1:false,
      isActive2:false,
      isActive3:false,
      isActive4:false,
      data:[],
      idolExp:[],
      hiphopExp:[],
      poppinExp:[],
      search:'',
      showsearch:false,
      caris:[],
    };


  },
  name: "ExpertList",
  props: {
    // msg: String
  },
  mounted(){
        this.loadFeedback();
  },
  methods: {
    searchExpert(){
        fetch('/api/feedback/search?q='+this.search)
        .then(res => res.json())
        .then(res => {
            this.caris = res;
            console.log("검색결과 : ",res);
            this.search = '';
            this.showsearch = true;
        })
        .catch(err => {
          console.log("에러다 에러");
        });
    },
    loadFeedback: async function(){
            try{

                const response=await feedbackService.loadFeedback();
                // console.log(response.data[0]);
                console.log("data : ",response.data);
                // this.experts.unshift(response.data);
                this.experts=response.data; 
                console.log("전문가 값 출력 : ",this.experts);


                const idolExp = response.data.filter(item => item.expert.specialty.area === 'idol');
                // console.log(idolExp);
                this.idolExp=idolExp;

                const hiphopExp = response.data.filter(item => item.expert.specialty.area === 'hiphop');
                // console.log(hiphopExp);
                this.hiphopExp=hiphopExp;

                const poppinExp = response.data.filter(item => item.expert.specialty.area === 'poppin');
                // console.log(poppinExp);
                this.poppinExp=poppinExp;
               


            }catch(error){
                this.flashMessage.error({
                    message: '데이터를 못받았음',
                    time:5000
             });
         }
     },
    active1(items) {
      this.isActive1 =!this.isActive1;
      this.data.unshift(items);
    },
    active2(items) {
      this.isActive2 =!this.isActive2;
      this.data.unshift(items);
    },
    active3(items) {
      this.isActive3 =!this.isActive3;
      this.data.unshift(items);
    },
  },
  components: {
    ExpertItem,
    ExpertDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .expert {
    display: block;
    width: 100%;
    height: auto;
    padding-bottom:50px;
    background-color:#2c2c2c;
  }
  

  .expert-set{
    margin-bottom: 50px;
  }

  .expert-imgList {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .expert-profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  h1{
    margin-left:15.7%;
    font-size: 28px;
    font-weight: bold;
    color:white;
  }

  .expert-search{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:20px;
    margin-left:10px;
  }


  .input-group{
    margin-top:60px;
    margin-left:850px;
    width:260px;
  }

  .input-group-prepend{
    background-color:tomato;
  }

  .search{
    color:white;
  }

</style>


