var webCam;
var context;
var canvas;
var net;
var start = false;
var ready = true;
var video = document.getElementById('source-video');
var videoData;
var danceData = [];
var startTime;
var finalScore = 0;
var finalCount = 0;
var timing = 0;

// document.getElementById("modal_open_btn").onclick = function() {
//   document.getElementById("modal").style.display = "block";
// }
document.getElementById("replay_btn").onclick = function() {
  document.getElementById("modal").style.display = "none";
}
// document.getElementById("start-btn").onclick = function() {
//   video.play();
// }  
document.getElementById("preview-btn").onclick = function() {
  video.controls = true;
  ready = false;
  this.style.display = 'none';
  document.getElementById("testmode-btn").style.display = 'block';  
  video.currentTime = 0;
}
document.getElementById("testmode-btn").onclick = function () {
  video.controls = false;
  ready = true;
  this.style.display = 'none';
  document.getElementById("preview-btn").style.display = 'block';  
  video.currentTime = 0;
}
function setWebcam(){
//  canvas = document.getElementById('canvas'),
//  context = canvas.getContext('2d'),
  webCam = document.getElementById('webCam');
  //vendorUrl = window.URL || window.webkitURL;
  
  // navigator.getMedia =  navigator.getUserMedia ||
  // navigator.webkitGetUserMedia ||
  // navigator.mozGetuserMedia ||
  // navigator.msGetUserMedia;
  
  // navigator.getMedia({
  //   video: true,
  //   audio: false
  // }, function(stream) {
  //   webCam.srcObject = stream;
  //   webCam.play();
  // }, function(error) {
  //   // an error occurred
  // } );
  
  webCam.addEventListener('play', function() {
    draw();
  }, false );
}




async function draw() {
  
  net.dispose();
  net = await posenet.load({
    // architecture: 'ResNet50',
    // outputStride: 32,
    // inputResolution: { width: 257, height: 200 },
    // quantBytes: 2
  });
  const pose = await net.estimateSinglePose(webCam);
//   context.clearRect(0,0,canvas.width,canvas.height);
// //  console.log(pose);
//   for(var i of pose.keypoints){ 
//     if (i.score > 0.6) {
//       context.fillRect(800-i.position.x, i.position.y, 10, 10);
//     }
//  } 
  poses = getData(pose);
//  console.log(poses[1],poses[2],poses[3],poses[4]);
//  console.log(poses);

  motionSercle = [-51.47224073047192, -130.79577367522916, -134.99166049100938, -53.90398220226736]
  if(!start && ready &&
    poses.leftUpperarm < motionSercle[0]+20 && poses.leftUpperarm > motionSercle[0]-20 && 
    poses.leftForearm < motionSercle[1]+20 && poses.leftForearm > motionSercle[1]-20 && 
    poses.rightUpperarm < motionSercle[2]+20 && poses.rightUpperarm > motionSercle[2]-20 && 
    poses.rightForearm < motionSercle[3]+20 && poses.rightForearm > motionSercle[3]-20){
      start = true;
      videoStart();
  }
  p = document.querySelectorAll('p');

  // const sam = await net.estimateSinglePose(video);
  // sample = getData(sam);

//  console.log(poses);
//   if(Math.abs(poses.shoulder) != 180 && poses.shoulder != 0){
//     score += Math.abs(poses.shoulder - sample.shoulder);
// //    p[0].innerHTML = 100-Math.abs(poses.shoulder - sample.shoulder)/360*100
//     p[0].innerHTML = Math.abs(poses.shoulder) - Math.abs(sample.shoulder) + "  "+poses.shoulder+"   "+sample.shoulder;
//     cnt++;
//   }
//   if(Math.abs(poses.leftUpperarm) != 180 && poses.leftUpperarm != 0){
//     score += Math.abs(poses.leftUpperarm - sample.leftUpperarm);
//     p[1].innerHTML = 100-Math.abs(poses.leftUpperarm - sample.leftUpperarm)/360*100
//     cnt++;
//   }
//   if(Math.abs(poses.leftForearm) != 180 && poses.leftForearm != 0){
//     score += Math.abs(poses.leftForearm - sample.leftForearm);
//     p[2].innerHTML = 100-Math.abs(poses.leftForearm - sample.leftForearm)/360*100
//     cnt++;
//   }
//   if(Math.abs(poses.rightUpperarm) != 180 && poses.rightUpperarm != 0){
//     score += Math.abs(poses.rightUpperarm - sample.rightUpperarm);
//     p[3].innerHTML = 100-Math.abs(poses.rightUpperarm - sample.rightUpperarm)/360*100
//     cnt++;
//   }
//   if(Math.abs(poses.rightForearm) != 180 && poses.rightForearm != 0){
//     score += Math.abs(poses.rightForearm - sample.rightForearm);
//     p[4].innerHTML = 100-Math.abs(poses.rightForearm - sample.rightForearm)/360*100
//     cnt++;
//   }
//   if(Math.abs(poses.leftTrunk) != 180 && poses.leftTrunk != 0){
//     score += Math.abs(poses.leftTrunk - sample.leftTrunk);
//     cnt++;
//   }
//   if(Math.abs(poses.rightTrunk) != 180 && poses.rightTrunk != 0){
//     score += Math.abs(poses.rightTrunk - sample.rightTrunk);
//     cnt++;
//   }
//   if(Math.abs(poses.hip) != 180 && poses.hip != 0){
//     score += Math.abs(poses.hip - sample.hip);
//     cnt++;
//   }
//   if(Math.abs(poses.leftThigh) != 180 && poses.leftThigh != 0){
//     score += Math.abs(poses.leftThigh - sample.leftThigh);
//     cnt++;
//   }
//   if(Math.abs(poses.leftShin) != 180 && poses.leftShin != 0){
//     score += Math.abs(poses.leftShin - sample.leftShin);
//     cnt++;
//   }
//   if(Math.abs(poses.rightThigh) != 180 && poses.rightThigh != 0){
//     score += Math.abs(poses.rightThigh - sample.rightThigh);
//     cnt++;
//   }
//   if(Math.abs(poses.rightShin) != 180 && poses.rightShin != 0){
//     score += Math.abs(poses.rightShin - sample.rightShin);
//     cnt++;
//   }
  score = 0;
  cnt = 0;
  i = 0;
  if(start){
    d = new Date();
    time = d.getTime() - startTime;
    // while(true){
    //   if(time <= videoData[timing]['time']){
    //     break;
    //   }else{
    //     timing++;
    //     if( timing <= videoData.length){
    //       timing--;
    //       break;
    //     }
    //   }
    // }
    timing = Math.round(time/200);
    console.log("TIME : " ,timing);
    for(key in poses){
      if(Math.abs(poses[key]) != 180 && poses[key] != 0){
        tmp = 100 - distance(poses[key], videoData[timing][key]) / 180 * 100;
//        console.log(cnt+" / "+time+" / "+videoData[timing]['time']);
        if( tmp < 0)
          tmp = 0;
        score += tmp;
        p[i].innerHTML = key+" : "+ tmp.toFixed(1)+"%";
        console.log(key+" : "+ tmp.toFixed(1)+"%");
        // p[0].innerHTML = 100-Math.abs(poses.shoulder - sample.shoulder)/360*100
        // p[0].innerHTML = Math.abs(poses.shoulder) - Math.abs(sample.shoulder) + "  "+poses.shoulder+"   "+sample.shoulder;
        cnt++;
      }
      i++;
    }
    danceData.push({time,'score':tmp})
    tmp = 0;
    if(cnt != 0){
      tmp = score/cnt; 
      finalScore += tmp;
      finalCount += 1  
    }
    console.log(finalScore);
    console.log(tmp.toFixed(1)+"%");  
  }


  // score += Math.abs(poses.shoulder - sample.shoulder);
  // score += Math.abs(poses.leftUpperarm - sample.leftUpperarm);
  // score += Math.abs(poses.leftForearm - sample.leftForearm);
  // score += Math.abs(poses.rightUpperarm - sample.rightUpperarm);
  // score += Math.abs(poses.rightForearm - sample.rightForearm);
  // score += Math.abs(poses.leftTrunk - sample.leftTrunk);
  // score += Math.abs(poses.rightTrunk - sample.rightTrunk);
  // score += Math.abs(poses.hip - sample.hip);
  // score += Math.abs(poses.leftThigh - sample.leftThigh);
  // score += Math.abs(poses.leftShin - sample.leftShin);
  // score += Math.abs(poses.rightThigh - sample.rightThigh);
  // score += Math.abs(poses.rightShin - sample.rightShin);




  // if(start){
  //   // d = new Date();
  //   // while(True){
  //   //   score += Math.abs(videoData[].rightForearm)
  //   //   counting
      
  //   // }
  //   score += Math.abs(poses.shoulder - videoData[counting].shoulder);
  //   score += Math.abs(poses.leftUpperarm - videoData[counting].leftUpperarm);
  //   score += Math.abs(poses.leftForearm - videoData[counting].leftForearm);
  //   score += Math.abs(poses.rightUpperarm - videoData[counting].rightUpperarm);
  //   score += Math.abs(poses.rightForearm - videoData[counting].rightForearm);
  //   score += Math.abs(poses.leftTrunk - videoData[counting].leftTrunk);
  //   score += Math.abs(poses.rightTrunk - videoData[counting].rightTrunk);
  //   score += Math.abs(poses.hip - videoData[counting].hip);
  //   score += Math.abs(poses.leftThigh - videoData[counting].leftThigh);
  //   score += Math.abs(poses.leftShin - videoData[counting].leftShin);
  //   score += Math.abs(poses.rightThigh - videoData[counting].rightThigh);
  //   score += Math.abs(poses.rightShin - videoData[counting].rightShin);
  //   console.log(score);
  //   counting++;
  // }


  requestAnimationFrame(draw);
}

function videoStart(){
  d = new Date();
  startTime = d.getTime();
  video.play();
}

// video.addEventListener('play', async function() {
//   console.log('video start')
//   d = new Date();
//   startTime = d.getTime();
// }, false );

video.addEventListener('ended', function(){
  console.log('video end');
  d = new Date(); 
  console.log(danceData);
  console.log(finalScore);
  finalScore = (finalScore / finalCount).toFixed(1);
  console.log(finalScore, danceData.length)
  start = false;
  document.getElementById("modal").style.display = "block";
  document.getElementById("score").innerHTML = "score : " +finalScore+ "%";
}, false);

function distance(i, j){
  return Math.abs( Math.abs(i) - Math.abs(j) )
}

function getData(pose){
  for(let i of pose.keypoints){
    if(i.score < 0.499){
      i.position.x, i.position.y = 0;
    }
  }
  //  console.log(getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y));
  back = {}
  // 어깨  
  back.shoulder = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y);
  // 안쪽 왼팔
  back.leftUpperarm = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[7].position.x, pose.keypoints[7].position.y);
  // 바깥쪽 왼팔
  back.leftForearm = getAngle(pose.keypoints[7].position.x, pose.keypoints[7].position.y, pose.keypoints[9].position.x, pose.keypoints[9].position.y);
  // 안쪽 오른팔
  back.rightUpperarm = getAngle(pose.keypoints[6].position.x, pose.keypoints[6].position.y, pose.keypoints[8].position.x, pose.keypoints[8].position.y);
  // 바깥쪽 오른팔
  back.rightForearm = getAngle(pose.keypoints[8].position.x, pose.keypoints[8].position.y, pose.keypoints[10].position.x, pose.keypoints[10].position.y);
  // 왼쪽 몸뚱아리
 back.leftTrunk = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[11].position.x, pose.keypoints[11].position.y);
  // 오른쪽 몸뚱아리
 back.rightTrunk = getAngle(pose.keypoints[6].position.x, pose.keypoints[6].position.y, pose.keypoints[12].position.x, pose.keypoints[12].position.y);
  // 엉덩이
  back.hip = getAngle(pose.keypoints[11].position.x, pose.keypoints[11].position.y, pose.keypoints[12].position.x, pose.keypoints[12].position.y);
  // 왼쪽 허벅지
  back.leftThigh = getAngle(pose.keypoints[11].position.x, pose.keypoints[11].position.y, pose.keypoints[13].position.x, pose.keypoints[13].position.y);
  // 왼쪽 종아리
  back.leftShin = getAngle(pose.keypoints[13].position.x, pose.keypoints[13].position.y, pose.keypoints[15].position.x, pose.keypoints[15].position.y);
  // 오른쪽 허벅지
  back.rightThigh = getAngle(pose.keypoints[12].position.x, pose.keypoints[12].position.y, pose.keypoints[14].position.x, pose.keypoints[14].position.y);
  // 오른쪽 종아리 
  back.rightShin = getAngle(pose.keypoints[14].position.x, pose.keypoints[14].position.y, pose.keypoints[16].position.x, pose.keypoints[16].position.y);

  return back;
}

function getAngle(x1,y1,x2,y2){
  var rad = Math.atan2(y2-y1,x2-x1);
  return(rad*180)/Math.PI;
}

async function bindPage() {
  net = await posenet.load();
  videoData = JSON.parse(data);
  // for(key in videoData){
  //   timing.push(videoData['time']);
//  }
  console.log(videoData);
  setWebcam();
}


bindPage();