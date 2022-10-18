const player = document.querySelector(".video-player");
const videoSource = document.querySelector(".video__source");
const preview = document.querySelector(".video-galery__item");
const vid = "./vid/crow.mp4";

preview.addEventListener("click", onPreviewClick);

function onPreviewClick() {
  videoSource.setAttribute("src", vid);
  player.load();
  player.setAttribute("controls", true);
}


document.querySelector("video").onended = function() {
  if(this.played.end(0) - this.played.start(0) === this.duration) {
    console.log("Played all");
	 preview.classList.add("watched");
  }else {
    console.log("Some parts were skipped");
  }
}