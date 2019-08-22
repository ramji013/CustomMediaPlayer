
	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play");
	var pauseButton = document.getElementById("pause");
	var muteButton = document.getElementById("mute");
	var volumeBar = document.getElementById("volume-bar");

	var volumePlus = document.getElementById("volume-plus");
	var volumeMinus = document.getElementById("volume-minus");
	var reload = document.getElementById("video-reload");
	var progressBar = document.getElementById("progressBar");
	var likeCount = document.getElementById("like");
	var unLikeCount = document.getElementById("unlike");
	var progress = document.getElementById("progress");
	

	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();
			document.getElementById("play").disabled = true;
			document.getElementById("pause").disabled = false;
		} 
	});


	// Event listener for the play/pause button
	pauseButton.addEventListener("click", function() {
		if (video.paused == false) {
			// Play the video
			video.pause();
			document.getElementById("play").disabled = false;
			document.getElementById("pause").disabled = true;
		} 
	});


	// Event listener for the volume bar
	volumePlus.addEventListener("click", function() {
		// Update the video volume
		if(video.volume!=1){
			video.volume = video.volume + 0.1;
	}
	});


	// Event listener for the volume bar
	volumeMinus.addEventListener("click", function() {
		// Update the video volume
		if(video.volume>=0){
			video.volume = video.volume - 0.1;
		}
	});


	// Event listener for the volume bar
	reload.addEventListener("click", function() {
		// Update the video volume
			video.currentTime = 0;
	});

	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;
		} else {
			// Unmute the video
			video.muted = false;
		}
	});


	video.addEventListener('loadedmetadata', function() {
		progress.setAttribute('max', video.duration);
		if (video.paused == true) {
			document.getElementById("play").disabled = false;
			document.getElementById("pause").disabled = true;
		}
	 });

	 video.addEventListener('timeupdate', function() {
		if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
	 		 progress.value = video.currentTime;
  			 progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
	 });

	// Event listener for the play/pause button
	pauseButton.addEventListener("click", function() {
		
		if (video.play == true) {
			// Play the video
			video.pause();
			alert("pause button called")

			// Update the button text to 'Pause'
			//playButton.innerHTML = "Pause";
			document.getElementById("play").disabled = false;
			document.getElementById("pause").disabled = true;
		} 
	});

	likeCount.addEventListener("click", function(){
		var count = localStorage.getItem("like");
		if(count==null){
			count = 0;
		}else{
			count = parseInt(count);
		}
		count += 1;
		localStorage.setItem("like", count);
		document.getElementById("like-count").innerText = count;
	})

	unLikeCount.addEventListener("click", function(){
		var unLikeCount = localStorage.getItem("unLike");
		var likeCount = localStorage.getItem("like");
		if(likeCount!=null && likeCount>0){
			if(unLikeCount==null){
				unLikeCount = 0;
			}else{
				unLikeCount = parseInt(unLikeCount);
			}
			unLikeCount += 1;
			localStorage.setItem("unLike", unLikeCount);
			likeCount -= 1;
			localStorage.setItem("like", likeCount);
			document.getElementById("unlike-count").innerText = unLikeCount;
			document.getElementById("like-count").innerText = likeCount;
	}
		
	})


var video_player = document.getElementById("video_player"),
links = video_player.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
	links[i].onclick = handler;
}


function handler(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#video_player video");
	video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();
	document.getElementById("play").disabled = true;
	document.getElementById("pause").disabled = false;
}