var videos = document.querySelectorAll("video");
for(var i = 0; i < videos.length; i++)
{
  var currentVideo = videos[i];
  if(currentVideo.paused){
    currentVideo.play();
  }else{
    currentVideo.pause();
  }
}
