@extends('welcome')

@section('script')
<link rel="stylesheet" href="https://vjs.zencdn.net/7.7.5/video-js.css">
<!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
<script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
<script src="https://vjs.zencdn.net/7.7.5/video.js"></script>
<script>
	window.onload = function(){
		var pushMeButton = document.getElementById('press_me');
		var player1 = videojs('my-video1');
		var player2 = videojs('my-video2');
		function buttonListener(e){
			if(e.target.value == "stop"){
				e.target.value = "start";
				player1.play();
				player2.play();
			}else{
				e.target.value = "stop";
				player1.pause();
				player2.pause();
			}
		}
		pushMeButton.addEventListener('click', buttonListener);
	}
	$(function(){
		var player1 = document.getElementById("my-video1");
		var player2 = document.getElementById("my-video2");
		player1.addEventListener('timeupdate', timeupdate1, false);
		player2.addEventListener('timeupdate', timeupdate2, false);

		function timeupdate1() {
			var loopStart1 = parseFloat(document.getElementById('loopStart1').value);
			var loopEnd1 = parseFloat(document.getElementById('loopEnd1').value);
			var loopEnabled1 = document.getElementById('loopEnabled1').checked;

			if(loopEnabled1){
				if (player1.currentTime < loopStart1 || player1.currentTime >= loopEnd1 ) {
					player1.currentTime = loopStart1;
				}
			}
		}
		function timeupdate2() {
			var loopStart2 = parseFloat(document.getElementById('loopStart2').value);
			var loopEnd2 = parseFloat(document.getElementById('loopEnd2').value);
			var loopEnabled2 = document.getElementById('loopEnabled2').checked;

			if(loopEnabled2){
				if (player2.currentTime < loopStart2 || player2.currentTime >= loopEnd2 ) {
					player2.currentTime = loopStart2;
				}
			}
		}
	})
</script>
@endsection

@section('style')
<style>
</style>
@endsection

@section('content')
<test-component></test-component>
<div id="train-container">
	<div>
		<video
			id="my-video1"
			class="video-js"
			controls
			preload="auto"
			width="640"
			height="264"
			data-setup="{}">
			<source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
			<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that
				<a href="https://videojs.com/html5-video-support/" target="_blank"
				>supports HTML5 video</a>
			</p>
		</video>
		Start: <input type="text" size="5" id="loopStart1" value="10" />
		End:   <input type="text" size="5" id="loopEnd1"   value="15" />
		Loop:  <input type="checkbox" checked="checked" id="loopEnabled1" />
	</div>
	<hr>
	<div>
		<video
			id="my-video2"
			class="video-js"
			controls
			preload="auto"
			width="640"
			height="264"
			data-setup="{}">
			<source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
			<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that
				<a href="https://videojs.com/html5-video-support/" target="_blank"
				>supports HTML5 video</a>
			</p>
		</video>
		Start: <input type="text" size="5" id="loopStart2" value="10" />
		End:   <input type="text" size="5" id="loopEnd2"   value="15" />
		Loop:  <input type="checkbox" checked="checked" id="loopEnabled2" />
	</div>
	두 영상 동시 재생 : <input id="press_me" type="button" value="stop">
</div>
@endsection