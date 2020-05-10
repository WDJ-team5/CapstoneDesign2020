<template>
  <div class="expert">

    <h1>피드백 전문가</h1>

    <div class="expert-set">
      <div id="container" class="expert-imgList kpop">
        <ExpertItem v-on:active="active1" />
      </div>
      <div class="expert-profile" v-if="isActive1">
        <ExpertDetail v-bind:propsdata="data[0]"></ExpertDetail>
      </div>
    </div>

    <div class="expert-set">
      <div id="container" class="expert-imgList kpop">
        <ExpertItem v-on:active="active2" />
      </div>
      <div class="expert-profile" v-if="isActive2">
        <ExpertDetail></ExpertDetail>
      </div>
    </div>


    <div class="expert-set">
      <div id="container" class="expert-imgList kpop">
        <ExpertItem v-on:active="active3" />
      </div>
      <div class="expert-profile" v-if="isActive3">
        <ExpertDetail></ExpertDetail>
      </div>
    </div>


    <div class="expert-set">
      <div id="container" class="expert-imgList kpop">
        <ExpertItem v-on:active="active4" />
      </div>
      <div class="expert-profile" v-if="isActive4">
        <ExpertDetail></ExpertDetail>
      </div>
    </div>




  </div>
</template>

<script>
import ExpertItem from "./ExpertItem.vue";
import ExpertDetail from "./ExpertDetail.vue";


export default {
  data () {
    return {
      isActive1:false,
      isActive2:false,
      isActive3:false,
      isActive4:false,
      data:[]
    };
  },
  name: "ExpertList",
  props: {
    // msg: String
  },
  methods: {
    active1(items) {
      this.isActive1 =!this.isActive1;
      this.data.unshift(items);
      console.log("데이터확인",this.data[0],"응그래");
    },
    active2() {
      this.isActive2 =!this.isActive2;
    },
    active3() {
      this.isActive3 =!this.isActive3;
    },
    active4() {
      this.isActive4 =!this.isActive4;
    }
  },
  components: {
    ExpertItem,
    ExpertDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin : 20px 20px 20px 20px;
    }

  .expert {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom:30px;
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

</style>
