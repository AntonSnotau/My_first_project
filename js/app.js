document.addEventListener('DOMContentLoaded', function() {
  const vid = document.getElementById("video-background");
  const pauseButton = document.querySelector(".myButton");

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "paused";
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function() {
    vid.pause();
    vidFade();
  });

  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "pause";
    } else {
      vid.pause();
      pauseButton.innerHTML = "play";
    }
  })
});
