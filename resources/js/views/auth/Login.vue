<template>
  <!-- Material form login -->
  <form id="login_form" v-on:submit.prevent="createSession">
    <!-- <img style="width:230px;height:55px;margin-bottom:10px;" src='../assets/images/logo.jpg'> -->
    <p id="login_title">기업,일반회원 로그인</p>
    <input
      type="text"
      id="defaultFormLoginEmailEx"
      v-model="sessionData.userid"
      class="form-control"
      placeholder="아이디"
    />
    <br />
    <input
      type="password"
      id="defaultFormLoginPasswordEx"
      v-model="sessionData.password"
      class="form-control"
      placeholder="비밀번호"
    />

    <div class="text-center mt-4">
      <button id="login_button" class="btn btn-indigo" type="submit">Login</button>
    </div>

    <div class="text-center mt-4">
      <a class="login_link" href="#">아이디 찾기</a>
      <a class="login_link" href="#">비밀번호 찾기</a>
    </div>

    <div class="text-center mt-4">
      <p id="sign_text">미나오도 회원이 아니신가요?</p>
      <router-link to="/signselect" id="sign_up" class="nav-link" exact>회원가입</router-link>
    </div>
  </form>
  <!-- Default form login -->
  <!-- Material form login -->
</template>

<script>
import * as sessionService from "../../services/session.service";

export default {
  name: "session",
  data() {
    return {
      sessionData: {
        userid: "",
        password: ""
      }
    };
  },
  methods: {
    createSession: async function() {
      //request!
      let formData = new FormData();
      formData.append("userid", this.sessionData.userid);
      formData.append("password", this.sessionData.password);
      console.dir(formData);
      try {
        const response = await sessionService.createSession(formData);
        console.log(response);
        console.log("로그인 성공~!");
        // this.flashMessage.success({
        //   message: "Category stored successfully!",
        //   time: 5000
        // });
      } catch (error) {
        console.log(response);
        console.log(error);
        // switch (error.response.status) {
        //   case 422:
        //     this.errors = error.response.data.errors;
        //     break;
        //   default:
        //     this.flashMessage.error({
        //       message: "Some error occurred, Please try again!",
        //       time: 5000
        //     });
        //     break;
        // }
      }
    }
  }
};
</script>

<style scoped>
#login_form {
  margin-top: 100px;
}

#login_title {
  color: #666666;
  font-size: 18px;
  text-align: center;
}

#defaultFormLoginEmailEx {
  width: 310px;
  height: 60px;
  margin-left: 41%;
  border: 1px solid #666666;
}

#defaultFormLoginPasswordEx {
  width: 310px;
  height: 60px;
  margin-left: 41%;
  border: 1px solid #666666;
}

#login_button {
  width: 310px;
  height: 60px;
  background: #ed1c24;
  color: white;
}

.login_link {
  text-decoration: none;
  color: #141414;
  font-size: 12px;
}

#sign_text {
  margin-top: 63px;
  color: #141414;
  text-align: center;
  display: inline-block;
}

#sign_up {
  color: #ed1c24;
  display: inline-block;
}
</style>