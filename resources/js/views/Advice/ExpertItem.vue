<template>
  <div class="expert-imgList">
    <div class="expert-item" v-for="(items, index) in items" :key="items.expert_id" @click="active(index)"> 
      <img :src="items.img" alt="">
      <p class="text">{{items.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertItem",
  props: {
    // msg: String
  },
  methods: {
    active(index) {
      var value = this.items[index];
      this.$emit('active', value);
    }
  },
  data () {
    return {
      items: [
      {
        expert_id: 1,
        name: "김상헌",
        content: '안녕하세요', 
        major: '야구응원댄스',
        awards:'KBO 우수단장상',
        sns:'없음',
        company:'허니크루',
        img:'../../images/expert_1.png',
        created_at: "2020-09-15"
      },
      {
        expert_id: 2,
        name: "구자욱",
        content: '최강삼성 구자욱 치고 달려 구자욱', 
        major: '좌익수입니당',
        awards:'KBO 신인상 받았음',
        sns:'없음',
        company:'삼성라이온즈',
        img:'../../images/expert_1.png',
        created_at: "2020-09-15"
      },
      {
        expert_id: 3,
        name: "김상수",
        content: '민나하이~김상수입니당~싸인해드립니다', 
        major: '유격수',
        awards:'KBO 최다도루상',
        sns:'없음',
        company:'삼성라이온즈',
        img:'../../images/expert_1.png',
        created_at: "2020-09-15"
      },
      {
        expert_id: 4,
        name: "김헌곤",
        content: '삼성의 김헌곤~삼성의 김헌곤~', 
        major: '우익수',
        awards:'KBO 최다홈런상',
        sns:'없음',
        company:'삼성라이온즈',
        img:'../../images/expert_1.png',
        created_at: "2020-09-15"
      }]
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .expert-item {
    min-width: 250px;
    min-height: 300px;
    border: 1px solid;
    margin : 30px;
  }

  img {
    width: 100%;
  }

  .expert-imgList {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
</style>
