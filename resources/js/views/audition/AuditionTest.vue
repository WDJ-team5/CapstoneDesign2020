<template>
  <div id="container">
    <video
      ref="video"
      id="source-video"
      :src="video"
      v-on:ended="endedVideo()"
      v-bind:controls="computedVideoControls"
      crossorigin="anonymous"
      style=" -moz-transform: scaleX(1);
        -o-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        "
    ></video>
    <!-- <img src="sample.jpg" id="source-video" height="1000"/>         -->

    <video ref="webcam" id="webCam" width="800" height="600" autoplay v-on:play="bindPage()"></video>
    <!-- <canvas id="canvas" width="800" height="600"> -->
    <div id="count">3</div>
    <div id="pannel">
      <div id="pannel_content">
        <p>테스트를 시작하기전 자신의 모습이 인식이 잘 되는지 확인해주세요.</p>
        <p>주변에 옷이나 인식에 방해되는 요소를 제거해 주세요.</p>
        <hr/>
        <p>시험 응시 횟수는 무제한입니다.</p>
        <p>@댄스설명@</p>
        <p>서얾엉</p>
      </div>
      <div class="btn-bg bg-1">
        <div class="btn btn-1">
          <button id="preview_btn" type="button" v-on:click="modeChange()">{{computedModeChangeHtml}}</button>
          <!-- <button id="modal_open_btn" type="button" v-on:click="modalChange()">모달테스트</button> -->
          <!-- <button id="end-btn" type="button">끝내기</button> -->
          <router-link to="/lecture" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <button id="end_btn">끝내기</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>
<script src="video.js"></script>
<script>
import * as lectureService from "../../services/lecture_service";
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "LecturePlay",
  data() {
    const lectureId = Number(this.$route.params.id);
    const cal = require("../../../../public/js/calculation.js");
    return {
      animate: true,
      id: lectureId,
      cid:'',
      filename: "",
      video: "",
      videoData: null,
      webcam: "",
      videoControls: false,
      ready: true,
      net: null,
      started: false,
      startTime: null,
      danceData: [],
      totalScore: 0,
      finalCount: 0,
      loop: null,
      cal: cal,
      finalScore: 0,
      ended: false,
      counted:false,
      startCnt:3,
    };
  },
  mounted() {
    this.cid = Number(this.$route.params.contentId);
    const constraints = (window.constraints = {
      audio: false,
      video: true
    });

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        this.$refs.webcam.srcObject = stream;
      })
      .catch(error => {
        alert("웹캠을 인식할 수 없어용~!");
      });

    this.loadLectureData();
  },
  computed: {
    computedVideoControls: function() {
      return this.videoControls;
    },
    computedModeChangeHtml: function() {
      if (this.videoControls) return "테스트";
      else return "미리보기";
    },
    computedFinalScore: function() {
      return this.finalScore;
    }
  },
  methods: {
    loadLectureData: async function() {
      try {
        const response = await lectureService.loadLectureData(1);
        this.filename = response.data.video;
        this.video = "videos/" + "audition_sample01"+ ".mp4";
        axios
          .get("videoDatas/" + "audition_sample01" + ".json")
          .then(response => (this.videoData = response.data));
      } catch (err) {
        console.error(err);
      }
    },
    modeChange: function() {
      this.videoControls = !this.videoControls;
      this.ready = !this.ready;
      this.$refs.video.currentTime = 0;
      this.$refs.video.pause();
    },
    bindPage: async function() {
      this.net = await posenet.load();
      this.webcamReady();
    },
    webcamReady: async function() {
      this.net.dispose();
      this.net = await posenet.load();
      const pose = await this.net.estimateSinglePose(this.$refs.webcam);
      const poses = this.cal.getData(pose);

      let motionCircle = [
        -51.47224073047192,
        -130.79577367522916,
        -134.99166049100938,
        -53.90398220226736
      ];
      if (
        !this.counted&&
        !this.start &&
        this.ready &&
        poses.leftUpperarm < motionCircle[0] + 20 &&
        poses.leftUpperarm > motionCircle[0] - 20 &&
        poses.leftForearm < motionCircle[1] + 20 &&
        poses.leftForearm > motionCircle[1] - 20 &&
        poses.rightUpperarm < motionCircle[2] + 20 &&
        poses.rightUpperarm > motionCircle[2] - 20 &&
        poses.rightForearm < motionCircle[3] + 20 &&
        poses.rightForearm > motionCircle[3] - 20
      ) {
        // this.start = true;
        // let d = new Date();
        // this.startTime = d.getTime();
        // this.$refs.video.play();
        this.counted = true;
        document.getElementById('count').style.display = 'block';
        this.playCounting();
      }
      if (this.start) {
        let score = 0;
        let cnt = 0;
        let tmp = 0;
        let time = 0;
        let d = new Date();
        time = d.getTime() - this.startTime;
        let timing = Math.round(time / 200);
        if (timing >= this.videoData.length) {
          timing = this.videoData.length - 1;
        }
        for (let key in poses) {
          if (Math.abs(poses[key]) != 180 && poses[key] != 0) {
            tmp =
              100 -
              (this.cal.distance(poses[key], this.videoData[timing][key]) /
                180) *
                100;
            if (tmp < 0) tmp = 0;
            score += tmp;
            cnt++;
          }
        }

        this.danceData.push({ time, score: tmp });
        tmp = 0;
        if (cnt != 0) {
          tmp = 0;
          if (score != 0) tmp = score / cnt;
          this.totalScore += tmp;
          this.finalCount += 1;
        }
        console.log(tmp + "%");
      }
      if (!this.ended)
        this.loop = window.requestAnimationFrame(this.webcamReady);
    },
    playCounting: function(){
      document.getElementById('count').innerHTML = this.startCnt;
      console.log(this.startCnt)
      if(this.startCnt > 0){
        this.startCnt--;
        setTimeout(this.playCounting, 1000);
      }else{
        document.getElementById('count').style.display = "none";
        this.start = true;
        let d = new Date();
        this.startTime = d.getTime();
        this.$refs.video.play();
      }
    },
    endedVideo: async function() {
      if (this.start) {
        let tmp = this.totalScore / this.finalCount;
        this.finalScore = Math.round(tmp * 100) / 100;
        this.ended = true;
        // console.log(this.finalScore);

        // console.log(...formData);
        this.finalScore = tmp.toFixed(2);
        window.cancelAnimationFrame(this.loop);

        /* 데이터 저장 */
        try {
          const res = await lectureService.createScore(formData);
          console.log(res);
          console.log("플레이 데이터 저장 성공");
        } catch (error) {
          console.log(error);
        }
        
        /* 모달  */
        Swal.fire({
          title:'정확도 : '+this.finalScore+'%',
          html:
          '<p>해당 점수로 지원하시겠습니까?</p>',
          timerProgressBar: true,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: '지원하기',
          cancelButtonText: '다시하기',
          allowOutsideClick:false,
          allowEscapeKey:false,
        }).then((result)=>{
          if(result.value){
            this.apply();
          }
        })
      }
    },

    // 페이지 넘기기
    apply(){
      let score=this.finalScore;
      let cid=this.cid;
      this.$router.push({
        path:`/auditionapply/${cid}/${score}`
      });
    }
  }
};
</script>
<style>


/* html, body {
        overflow: hidden;
        width:100%;
        height: 100%;
        margin: 0;
        z-index: 1000000;
    } */

#container {
  width: 100%;
  height: 100%;
}
#canvas {
  position: relative;
}
#webCam {
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  height: 40%;
  background-color: black;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  z-index: 100000;
}
#source-video {
  position: fixed;
  left: 0;
  top: 0;
  width: 75%;
  height: 100%;
  background-color: black;
  z-index: 100000;
}

footer{
  display: none;
  }
.swal2-container{
  z-index:100001;
}
/* #canvas{ */
#pannel {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 60%;
  z-index: 100000;
}
#pannel #pannel_content{
  padding: 20px;
}

#preview_btn {
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 120px;
  height: 50px;
}

#end_btn {
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 120px;
  height: 50px;
}
#replay_btn{
  position: absolute;
  right: 170px;
  bottom: 10px;
}
body .btn-bg {
  position: absolute;
  width: 100%;
  height: 15%;
  bottom:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
body .btn-bg.bg-1 {
  background: #6ab1c9;
}
body .btn-bg.bg-1 .btn-1 button {
  color: #c7f8f9;
  background: transparent;
  border: 3px solid #c7f8f9;
  border-radius: 5px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
body .btn-bg.bg-1 .btn-1 button a {
  color: #c7f8f9;
}
body .btn-bg.bg-1 .btn-1 button:hover {
  background: #c7f8f9;
  color: #6ab1c9;
  border: 3px solid #6ab1c9;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
body .btn-bg.bg-1 .btn-1 button:hover >a {
  color: #6ab1c9;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
body .btn-bg.bg-1 .btn-1 button:active {
  -webkit-transform: translate(5px, 5px);
  transform: translate(5px, 5px);
}
#accuracy_p{
  font-size: 20px;
}


  #result_title{
        margin-left: 50px;
    }

    #result_score{
        margin-left: 96px;
    }
    
    #left_content{
      margin-top:70px
    }

    #result_ranking{
        margin-top: 20px;
    }
    #result_container{
        width: 100%;
        margin-top: 50px;
        border: 1px sollid gray;
        
    }
    #result_left{
        width:48%;
        height: 400px;
        display: inline-block;
        border:10px solid gray;
    }

    #result_graph{
        
        margin-left: 10%;
        background: #d3d3d3;
        width: 80%;
        height: 50px;
    }


    #result_right{
        width:48%;
        height: 400px;
        right:0;
        display: inline-block;
        vertical-align: top;
        border:10px solid gray;
    }

    #btn-radios-1{
        width: 80%;
    }

    #ranking_title{
        margin-top: 30px;
    }

    #button_area{
        width: 100%;
        margin-top:5%;
    }

    .resultbutton{
        width:30%;
        
        vertical-align: top;
    }

#count{
  position:fixed;
  display:none;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  padding: 300px;
  font-size: 200px;
  text-align: center;
  background: rgba(0,0,0,0.5);
  z-index: 100002;
}
</style>