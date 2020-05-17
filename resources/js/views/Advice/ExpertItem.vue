<template>
  <div class="expert-imgList">
    <div class="expert-item" v-for="(propsdata, index) in propsdata" :key="propsdata.userid" @click="active(index)"> 
      <img :src="propsdata.img" alt="">
      <p class="text">{{propsdata.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertItem",
  props: ['propsdata'],
  methods: {
    active(index) {
      var value = this.propsdata[index];
      this.$emit('active', value);
    }
  },
  data () {
    return{
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
