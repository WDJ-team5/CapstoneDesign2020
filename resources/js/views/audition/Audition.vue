<template>
  <div id="container">
    <div class="common_contentbox">
      <hr>
      <h2 class="title">オーディション</h2>
      <b-dropdown id="dropdown-text" text="ランク選択" class="m-2 drop">
        <b-dropdown-item-button @click="aRank()">A랭크이상</b-dropdown-item-button>
        <b-dropdown-item-button @click="bRank()">B랭크이상</b-dropdown-item-button>
      </b-dropdown>
      <ul class="audition_list" v-for="(audition,index) in paginatedData" :key="index">
        <li @click="rowClick(audition)">
          <a href="#" class="link">
            <div class="imgbox hovereffect">
              <img id="card-image" :src="`${$store.state.serverPath}/storage/${audition.aud_image}`" :alt="audition.title">
            </div>
            <div class="d_dayinfo">
              <p class="day">{{audition.rank}}ランク以上</p>
              <table class="info">
                <colgroup>
                  <col style="width:100px;" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">{{audition.title}}</th>
                  </tr>
                </thead>
                <tbody>
                  <!--                                        <tr>
                                    <th>제작</th>
                                    <td>메가폰 엔터테인먼트</td>
                  </tr>-->
                  <tr>
                    <th>募集対象</th>
                    <td>{{audition.object}}</td>
                  </tr>

                  <tr>
                    <th>締め切り</th>
                    <td>{{audition.end_date}} まで</td>
                  </tr>
                  <!--                                        <tr>
                                    <th>주연</th>
                                    <td>이준혁, 장동곤, 이창범</td>
                  </tr>-->
                  <tr>
                    <th>会社名</th>
                    <td>{{ audition.user.company.company_name }}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </a>
        </li>
      </ul>
      <div class="btn-cover">
          <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            前のページ
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} ページ</span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            次のページ
          </button>
        
      </div>

      <div id="button_area">
        
      </div>
    </div>
  </div>
</template>

<script>
import * as auditionService from "../../services/audition_service";

export default {
  name: "Audition",
  data() {
    // 게시판 최신 순 정렬
    // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})

    // 유저 네임 속성 추가(게시판의 유저아이디와 데이터의 유저아이디가 동일 할 경우에)
    // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})

    return {
      pageNum: 0,
      auditions: [],
      auditionsa:[],
      auditionsb:[],
      auditionData: {
        id: "",
        title: "",
        content: "",
        userId: 1,
        date: "",
        image: "",
        selected: "",
        video: ""
      },
      errors: {}
    };
  },

  props:{
    pageSize: {
      type: Number,
      required: false,
      default: 5
    }
  },

  mounted() {
    this.loadAudition();
  },

  methods: {
    aRank(){
      this.auditions=this.auditionsa;
    },
    bRank(){
     this.auditions=this.auditionsb;
    },
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },

    // 모든 데이터로드
    loadAudition: async function() {
      try {
        const response = await auditionService.loadAudition();
        // this.auditions.unshift(response);
        this.auditions = response.data[0];

        for(var i=0;i<this.auditions.length;i++){
          if(this.auditions[i].rank=="A"){
            this.auditionsa.push(this.auditions[i]);
          }else{
            this.auditionsb.push(this.auditions[i]);
          }
      }

        
        this.auditions2=response.data[0];
        // console.log(this.auditions);
      } catch (error) {
        this.flashMessage.error({
          message: "에러가 발생했습니다!",
          time: 5000
        });
      }
    },

    // 오디션 클릭시
    rowClick(audition, index, e) {
      this.$router.push({
        path: `/auditiondetail/${audition.id}`
      });
    },

    // 오디션 생성
    writeContent() {
      this.$router.push({
        path: "/auditioncreate"
      });
    }
  },

  computed:{
    // 오디션 데이터 길이 측정
    pageCount () {
      let listLeng = this.auditions.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      return page;
    },

    // 오디션 데이터 길이 나누기
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      console.log(this.auditions.slice(start, end)); 
      return this.auditions.slice(start, end);
    },
  }
};
</script>
    
<style>
p{
  color:white;
}

.select_box{
  width: 100%;
  height: 100px;
  background: #222;
  margin-top: 1%;
}


div,
h2,
ul {
  padding: 0;
  border: 0;
  outline: 0;
}

li{
    list-style: none;
}

h2 {
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

a {
  color: #333333;
  text-decoration: none;
}

.audition_list li .link {
  display: block;
}

.audition_list li .imgbox {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.audition_list li .imgbox:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(95, 95, 95, 0.6);
}

.audition_list li .imgbox img {
  width: 100%;
  height: auto;
}

/* 오디션 간략정보 */
.audition_list li .d_dayinfo {
  position: absolute;
  left: 0;
  top: 0;
  width: 440px;
  height: 400px;
  padding: 61px 30px 0 75px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
}

/* 기간정보 */
.audition_list li .d_dayinfo .day {
  width: 150px;
  height: 56px;
  padding-top: 0;
  box-sizing: border-box;
  background: #ed1c24;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 56px;
}

/* 오디션 리스트 기업정보 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
colgroup {
  display: table-column-group;
}
thead {
  display: table-header-group;
  vertical-align: middle;
}
th {
  display: table-cell;
  vertical-align: inherit;
  text-align: -internal-center;
}
tr {
  display: table-row;
  vertical-align: inherit;
}

.audition_list li .d_dayinfo .info tbody th {
  color: #141414;
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
}

.audition_list li .d_dayinfo .info thead th {
  padding-bottom: 15px;
  color: #141414;
  font-size: 20px;
  font-weight: bold;
}

.audition_list li .d_dayinfo .info {
  width: 100%;
  margin-top: 30px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

/* 오디션 페이지 박스 */
.common_contentbox {
  overflow: hidden;
  width: 1600px;
  margin: 0 auto;
  padding-bottom: 150px;
}

/* 오디션 페이지 텍스트 */
.common_contentbox > .title {
  margin: 0 0 0 0;
  color: #ed1b24;
  font-size: 28px;
  font-weight: bold;
  margin-left: 5%;
}

/* 오디션 페이지 리스트 */
ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.audition_list li {
  position: relative;
  margin-top: 20px;
}

.audition_list li:first-child {
  margin-top: 60px;
}

.btn-cover > button {
    display: inline-block;
    width: 152px;
    height: 48px;
    border: none;
    background: #ed1c24;
    color: #fff;
    font-size: 16px;
    line-height: 1;
}

#button_area{
  position: relative;
  margin-top: 30px;
  font-size: 0;
  line-height: 0;
  text-align: center;
}

.hovereffect:hover img {
        opacity: 0.6;
        filter: alpha(opacity=60);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

  .btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}

.common_contentbox > .m-2{
  margin-top: 2% !important;
  margin-left: 5% !important;
}
</style>