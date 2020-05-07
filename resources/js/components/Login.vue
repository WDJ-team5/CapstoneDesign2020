<template>
  <!-- Material form login -->
  <form id="login_form">
    <img style="width:230px;height:55px;margin-bottom:10px;" src='../assets/images/logo.jpg'>
    <p id="login_title">기업,일반회원 로그인</p>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control" placeholder="이메일"/>
    <br/>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control" placeholder="비밀번호"/>
    <div class="text-center mt-4">
      <button id="login_button" class="btn btn-indigo" type="submit">Login</button>
    </div>
    <div class="text-center mt-4">
      <a class="login_link" href="#">아이디 찾기</a>
      <a class="login_link" href="#">비밀번호 찾기</a>
    </div>
    <p id="sign_text">미나오도 회원이 아니신가요?
      <a id="sign_up" href="#">회원가입</a>
    </p>
  </form>
  <!-- Default form login -->
  <!-- Material form login -->
</template>

<script>
export default {

}
</script>

<style scoped>

#login_form{
  margin-top: 100px;
}

#login_title{
  color: #666666;
  font-size: 18px;
  text-align: center
}

#defaultFormLoginEmailEx{
  width: 310px;
  height: 60px;
  margin-left: 41%;
  border: 1px solid #666666;
}

#defaultFormLoginPasswordEx{
  width: 310px;
  height: 60px;
  margin-left: 41%;
  border: 1px solid #666666;
}

#login_button{
  width: 310px;
  height: 60px;
  background: #ed1c24;
  color: white;
}

.login_link{
  text-decoration: none;
  color: #141414;
  font-size: 12px;
}

#sign_text{
  margin-top: 63px;
  color: #141414;
  text-align: center;
}

#sign_up{
  color: #ed1c24;
}
</style>