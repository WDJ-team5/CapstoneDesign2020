<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Minaodo</a>
    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <!-- Navbar-->
    <div v-if="sessionData.state">
      <router-link to="/login" class="nav-link" exact>로그인</router-link>
    </div>
    <div v-if="!sessionData.state">
      <a v-on:click="deleteSession">로그아웃</a>
    </div>

    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="userDropdown"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-user fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#">Settings</a>
          <a class="dropdown-item" href="#">Activity Log</a>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import * as sessionService from "../services/session.service";

export default {
  name: "session",
  data() {
    return {
      sessionData: {
        state: ""
      }
    };
  },
  mounted() {
    this.checkSession();
  },
  methods: {
    checkSession: async function() {
      try {
        const response = await sessionService.checkSession();
        console.log(response.data);
        this.sessionData.state = response.data;
        if(response.data){
          console.log("로그아웃 유지 중");
        } else {
          console.log("로그인 유지 중");
        }
        

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
    },
    deleteSession: async function() {
      try {
        const response = await sessionService.deleteSession();
        console.log(response);
        console.log("로그아웃 됨");

        location.href="/";

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