<template>
  <div id="container">
    <video
      ref="video"
      id="source-video"
      :src="video"
      v-on:ended="endedVideo()"
      v-bind:controls="computedVideoControls"
      crossorigin="anonymous"
    ></video>

    <div id="count">3</div>
    <video ref="webcam" id="webCam" width="800" height="600" autoplay v-on:play="bindPage()"></video>
    <canvas id="canvas" width="800" height="600"/>
    <div id="pannel">
      <div id="pannel_content">
        <p>테스트를 시작하기전 자신의 모습이 인식이 잘 되는지 확인해주세요.</p>
        <p>주변에 옷이나 인식에 방해되는 요소를 제거해 주세요.</p>
        <hr/>
        <p>@댄스설명@</p>
        <p>{{content}}</p>
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
    <div id="toast"></div>
  </div>
</template>
<script>
import * as lectureService from "../../services/lecture_service";
import axios from "axios";
import chartjs from 'chart.js';
import Swal from 'sweetalert2';
export default {
  name: "LecturePlay",
  data() {
    const lectureId = Number(this.$route.params.id);
    const cal = require("../../../../public/js/calculation.js");
    let danceData = {time:[],score:[]};

    return {
      id: lectureId,
      content:"",
      filename: "",
      video: "",
      videoData: null,
      data:null,
      webcam: "",
      modalDisplay: "none",
      videoControls: false,
      ready: true,
      net: null,
      started: false,
      startTime: null,
      danceData: danceData,
      totalScore: 0,
      finalCount: 0,
      loop: null,
      cal: cal,
      finalScore: 0,
      ended: false,
      ctx: null,
      canvas: null,
      poses:[],
      counted:false,
      startCnt:3,
      viewData:{videoImg:[],webcamImg:[],score:[],time:[]},
      removeToast:null,
      // data:{
      //     'title' => '매우쉬운 아이돌 댄스',
      //     'content' => '이거슨 쉬운 아이돌 댄스입니다잉',
      //     'video' => 'sample',
      //     'image' => 'LectureImg/01.jpg',
      //     'genre_id' => 1,
      //     'level_id' => 1,
      // }
    };
  },
  mounted() {
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
    computedDisplay: function() {
      return this.modalDisplay;
    },
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
        const response = await lectureService.loadLectureData(this.id);
        this.content = response.data.content;
        this.filename = response.data.video;
        this.video = "/videos/" + this.filename + ".mp4";
        axios
          .get("/videoDatas/" + this.filename + ".json")
          .then(response => (this.videoData = response.data));
      } catch (err) {
        console.error(err);
      }
    },
    modalChange: function() {
      if (this.modalDisplay == "none") {
        this.modalDisplay = "block";
      } else {
        this.modalDisplay = "none";
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

      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      this.canvas = canvas;
      this.ctx = ctx;
      this.webcamReady();
    },
    webcamReady: async function() {
      this.net.dispose();
      this.net = await posenet.load(
        // {architecture: 'MobileNetV1',
        // outputStride: 16,
        // inputResolution: { width: 640, height: 480 },
        // multiplier: 0.75}
      );
      var webcam = this.$refs.webcam;
      const pose = await this.net.estimateSinglePose(webcam);
      const data = this.cal.getData(pose);

      let motionCircle = [
        -51.47224073047192,
        -130.79577367522916,
        -134.99166049100938,
        -53.90398220226736
      ];
      if (
        !this.start &&
        this.ready &&
        !this.counted &&
        data.leftUpperarm < motionCircle[0] + 20 &&
        data.leftUpperarm > motionCircle[0] - 20 &&
        data.leftForearm < motionCircle[1] + 20 &&
        data.leftForearm > motionCircle[1] - 20 &&
        data.rightUpperarm < motionCircle[2] + 20 &&
        data.rightUpperarm > motionCircle[2] - 20 &&
        data.rightForearm < motionCircle[3] + 20 &&
        data.rightForearm > motionCircle[3] - 20
      ) {
        // this.start = true;
        // let d = new Date();
        // this.startTime = d.getTime();
        this.canvas.style.display = 'none';
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


        var scoreJson = {};
        scoreJson.score = [];
        for (let key in data) {
          if (Math.abs(data[key]) != 180 && data[key] != 0 && Math.abs(this.videoData[timing][key]) != 180 && this.videoData[timing][key] != 0) {
            tmp = 100 - (this.cal.distance(data[key], this.videoData[timing][key]) / 90) * 100;
            if (tmp < 0) tmp = 0;
            scoreJson.score.push(Math.round(tmp*100)/100);
            score += tmp;
            cnt++;
          }else{
            scoreJson.score.push("감지X");
          }
        }
  
        tmp = 0;
        if (cnt != 0) {
          tmp = 0;
          if (score != 0) tmp = score / cnt;
          this.totalScore += tmp;
          this.finalCount += 1;
          this.danceData.time.push( time / 1000 );
          this.danceData.score.push( tmp );
          console.log(this.danceData.time);
          console.log(this.danceData.score);

        }

        // test-01
        var capture = document.createElement('canvas')
        var can = capture.getContext('2d');
        can.drawImage(webcam, 0, 0, 300, 150);
        var img = new Image();
        img.src = capture.toDataURL("image/png");
        img.style.transform= 'scaleX(-1)';

        this.viewData.webcamImg.push(img);

        var video = document.getElementById('source-video');
        capture = document.createElement('canvas');
        can = capture.getContext('2d');
        can.drawImage(video , 0, 0, 300, 150);
        img = new Image();
        img.src = capture.toDataURL("image/png");      
        this.viewData.videoImg.push(img);
        scoreJson.total = Math.round(tmp*100)/100+"%";
        this.viewData.score.push(scoreJson);
        this.viewData.time.push(time);
        this.poses.push(pose);
        console.log(this.viewData);

        console.log(tmp + "%");
        if(tmp<50)
          this.toast("정확도가 50% 이하입니다.");
      }else{
        console.log('asdf');
        this.draw(pose);
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

    saveVideo: function(){
      var canvas = document.createElement('canvas');
    },
    openModal: function(){
              /* 모달 */
        var data = this.viewData;

        Swal.fire({
          title:'정확도 : '+this.finalScore,
          html:
          '<p>시간별 정확도 그래프</p>'+
          '<button id="viewer-btn">자세히보기</button>'+
          '<canvas id="graph"></canvas>',
          timerProgressBar: true,
          icon: 'success',
          width: '1000px',
          showCancelButton: true,
          confirmButtonText: '끝내기',
          cancelButtonText: '다시하기',
          allowOutsideClick:false,
          allowEscapeKey:false,
          customClass:'swal2-height'
        }).then((result)=>{
          if(result.value){
            this.apply();
          }
        })
        var returned = this.openModal;
        document.getElementById('viewer-btn').onclick = function(){
          Swal.close();
          Swal.fire({
            title:'세부 데이터',
            html:
            '<div id="imgs-div"></div>'+
            '<input type="range" min="0" max="0" value="0" id="seekbar">',
            width: '1200px',
            customClass:'swal2-height',
            allowOutsideClick:false,
            allowEscapeKey:false,
          }).then((result)=>{
            if(result.value){
              return returned();
            }
          });
          var seekbar = document.getElementById('seekbar');
          var viewer = document.getElementById('imgs-div');

          seekbar.max = data.score.length-1;
          for(var key in data.videoImg){
            var div = document.createElement('div');
            div.classList.add('img-div');
            data.videoImg[key].style.width = '480px';
            data.videoImg[key].style.height = '320px';
            data.videoImg[key].style.padding = '1px';
            data.webcamImg[key].style.width = '480px';
            data.webcamImg[key].style.height = '320px';
            data.webcamImg[key].style.padding = '1px';
            div.appendChild(data.videoImg[key]);
            div.appendChild(data.webcamImg[key]);

            var p = document.createElement('p');
            p.innerHTML = data.score[key].total;
            div.appendChild(p);

            var label = ["어깨","왼팔 안쪽","왼팔 바깥쪽","오른팔 안쪽","오른팔 바깥쪽","왼쪽 몸","오른쪽 몸","엉덩이","왼쪽 허벅지","왼쪽 종아리","오른쪽 허벅지","오른쪽 종아리"];
            var table = document.createElement('table');
            table.style.position = 'relative';
            table.style.left = '50px';
            table.style.margin = '30px';
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var cnt = 0;
            for(var i = 0; i < 3 ; i++){
                tr = document.createElement('tr');
                for(var j = 0; j < 8; j++){
                    td = document.createElement('td');
                    if(j%2 == 0){
                      td.innerHTML = label[cnt];
                      td.width = '150px';
                    }
                    else{
                      if(data.score[key].score[cnt] < 50) td.style.color = 'red';
                      td.innerHTML = data.score[key].score[cnt++];
                      td.width = '100px';
                    }
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            div.appendChild(table);







            // p = document.createElement('p');
            // p.innerHTML = " 어깨 : " + data.score[key].score[0]+" 왼팔 안쪽 : " + data.score[key].score[1]+" 왼팔 바깥쪽 : " + data.score[key].score[2]+" 오른팔 안쪽 : " + data.score[key].score[3]+" 오른팔 바깥쪽 : " + data.score[key].score[4]+" 왼쪽 몸 : " + data.score[key].score[5]+" 오른쪽 몸 : " + data.score[key].score[6]+"</br>"+" 엉덩이 : " + data.score[key].score[7]+" 왼쪽 허벅지 : " + data.score[key].score[8]+" 왼쪽 종아리 : " + data.score[key].score[9]+" 오른쪽 허벅지 : " + data.score[key].score[10]+" 오른쪽 종아리 : " + data.score[key].score[11];
            // div.appendChild(p);


            if( key!=0)
              div.style.display='none';
            viewer.appendChild(div);
          }

          var lists = document.querySelectorAll('.img-div');
          seekbar.addEventListener('change', function(){
            var index = this.value;
            for(var i = 0; i < lists.length; i++){
              lists[i].style.display= 'none';
            }
            lists[index].style.display = 'block';
              console.log(data.score[index]);
          },false);
        }
        var chartCanvas = document.getElementById('graph').getContext('2d');
        var chart = new chartjs(chartCanvas,{
          label: '정확도',
          type: 'line',
          data: {
            labels:this.danceData.time,
            datasets:[{
              data: this.danceData.score,
              label: "정확도",
              borderColor: "black",
              fill:false,
            }],
//            backgroundColor:'rgba(255,201,14,1)',
           backgroundColor:'transpartent',
            // borderColor:'rgba(255,201,14,0.5)',
            borderColor:'orange',
            fill: true,
            lineTension:0
          },
          options:{
            responsive: false,
            scales: {
              yAxes:[{
                ticks:{
                  beginAtZero:true
                }
              }]
            }
          }
        });
    },
    endedVideo: async function() {
      if (this.start) {
        let tmp = this.totalScore / this.finalCount;
        this.finalScore = Math.round(tmp*100)/100;
        this.ended = true;
        // console.log(this.finalScore);

        let formData = new FormData();
        formData.append("accuracy", this.finalScore);
        formData.append("lecture_id", this.id);
        // console.log(...formData);
        this.finalScore = tmp.toFixed(2) + "%";
        window.cancelAnimationFrame(this.loop);
        console.log(this.danceData);

        /* 데이터 저장 */
        try { 
          const res = await lectureService.createScore(formData);
          console.log(res);
          console.log("플레이 데이터 저장 성공");
        } catch (error) {
          console.log(error);
        }

        this.openModal();

//        this.modalChange();
        
      }
    },
    toast:  function(string){
      const toast = document.getElementById("toast");
      toast.classList.contains("reveal") ?
          (clearTimeout(this.removeToast), this.removeToast = setTimeout(function () {
              document.getElementById("toast").classList.remove("reveal")
          }, 1000)) :
          this.removeToast = setTimeout(function () {
              document.getElementById("toast").classList.remove("reveal")
          }, 1000)
      toast.classList.add("reveal"),
          toast.innerText = string

    },
    draw: function(pose) {     
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var points = pose.keypoints;
      for(var key = 0; key < points.length; key++){
        if(points[key].score > 0.6){
          this.ctx.beginPath();
          this.ctx.arc(points[key].position.x,points[key].position.y,10,0,Math.PI*2);
          this.ctx.fillStyle = "#ff0000"
          this.ctx.fill()
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
        this.ctx.fillStyle = "#0095DD";
    },
    apply() {
      let score = this.finalScore;
      // let cid = this.cid;
      this.$router.push({
        path: `/lecture`
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
/* #canvas{ */
#pannel {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 60%;
}
#pannel{
  background-color: black;
  border: 1px solid white;
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
  right: 50px;
  width: 120px;
  height: 50px;
}


.swal2-container{
  z-index:100001;
}
.swal2-height{
  height: 800px; 
}
#graph{
  position: relative;
  left: 130px; 
  width: 700px;
  height: 300px;
}

#canvas{
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  height: 40%;
  border: 1px solid;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  z-index: 100001;
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
/* body .btn-bg.bg-1 {
  background: #6ab1c9;
} */
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
#seekbar{
  -webkit-appearance: none;
  width:800px;
  height:20px;
  background:#d3d3d3;
  outline:none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

#pannel #pannel_content{
  color: white;
}



/* toasting */
#toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    padding: 15px 20px;
    transform: translate(-50%, 10px);
    border-radius: 30px;
    overflow: hidden;
    font-size: 1.6rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s, visibility .5s, transform .5s;
    background: rgba(0, 0, 0, .35);
    color: #fff;
    z-index: 100002;
}

#toast.reveal {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0)
}
</style>