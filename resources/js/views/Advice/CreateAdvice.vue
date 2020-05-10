<template>
  <div>
    <b-input v-model="subject" placeholder="피드백 제목을 입력해주세요."></b-input>
    <b-form-textarea
        v-model="context"
        placeholder="내용을 입력해 주세요"
        rows="3"
        max-rows="6"
    ></b-form-textarea>
    <br>
    <b-button @click="updateMode ? updateContent() : uploadContent()">저장</b-button>&nbsp;
    <b-button @click="cancle">취소</b-button>
  </div>
</template>

<script>
import data from "./index.js";

export default {
  name: 'AdviceCreate',
  data() {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style>

</style>