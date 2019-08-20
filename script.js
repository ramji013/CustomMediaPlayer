
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
	var seekBar = document.getElementById("seek-bar");

	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();
			
			// Update the button text to 'Pause'
			//playButton.innerHTML = "Pause";
			
			document.getElementById("play").disabled = true;
			document.getElementById("pause").disabled = false;
		} 
	});


	// Event listener for the play/pause button
	pauseButton.addEventListener("click", function() {
		if (video.paused == false) {
			// Play the video
			video.pause();
			

			// Update the button text to 'Pause'
			//playButton.innerHTML = "Pause";
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
			//video.currentTime = 0;
			//video.reload = this.video.;
			//video.reload = true;
	
	});

	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			//muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			//muteButton.innerHTML = "Mute";
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
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