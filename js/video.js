const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Video Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	currentVol = video.playbackRate;
	const percChange = 0.1;
	currentVol = currentVol - (currentVol * percChange);
	video.playbackRate = currentVol;
	console.log("New Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	fastVol = video.playbackRate;
	fastVol = (fastVol / 0.9);
	video.playbackRate = fastVol;
	console.log("New Speed: " + video.playbackRate);
	//fix
});

document.querySelector("#skip").addEventListener("click", function() {
	time = video.currentTime;
	video.currentTime = time + 10;
	console.log("Current location is " + video.currentTime);
	if (video.currentTime >= video.duration) {video.currentTime = 0}	
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted == true) {document.querySelector("#mute").innerHTML = "Unmute"};
	if (video.muted == false) {document.querySelector("#mute").innerHTML = "Mute"};
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});