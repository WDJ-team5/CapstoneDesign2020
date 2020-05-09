<template>
    <div class="container-fluid">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
      
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header d-flex">
              <span>
                <i class="fas fa-chart-area mr-1"></i>카테고리 경영
              </span>
              <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span>만들기</button>
            </div>
            <div class="card-body">
                <table class="table">
                    <tr>
                        <thead>
                            <tr>
                                <td>아이디</td>
                                <td>이름</td>
                                <td>사진</td>
                                <td>액션</td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>1</td>
                            <td>장성현</td>
                            <td>이미지</td>
                            <td>
                                <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-primary btn-sm"><span class="fa fa-trash"></span></button>
                            </td>
                        </tbody>
                    </tr>
                </table>
            </div>
          </div>
        </div>
      </div>

      <b-modal ref="newCategoryModal" hide-footer title="새로운 카테고리를 추가">
        <div class="d-block">
          <form v-on:submit.prevent="createCategory">
            <div class="form-group">
              <label for="name">이름넣으삼</label>
              <input type="email" v-model="categoryData.name" class="form-control" aria-describedby="emailHelp" id="name" placeholder="카테고리 이름을 입력">
            </div>
            
            <div class="form-group">
              <label for="image">이미지를 선택하세여</label>
              <input type="file" v-on:change="attachImage" class="form-control" id="image">
            </div>

            <hr>
            <div class="text-right">
              <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">취소</button>
              <button type="submit" class="btn btn-primary" v-on:click="hideNewCategoryModal"><span class="fa fa-check"></span>저장</button>
            </div>

          </form>
        </div>
      </b-modal>

    </div>
</template>

<script>
export default {
  name:'category',
  data(){
    return {
      categoryData:{
        name:'',
        image:'',
      }
    }
  },
  methods:{
    attachImage(){
      // 파일 리더
      
    },
    hideNewCategoryModal(){
      this.$refs.newCategoryModal.hide();
    },
    showNewCategoryModal(){
      this.$refs.newCategoryModal.show();
    },
    createCategory(){
      console.log('폼이 섭밋됨');
    }
  }
}
</script>