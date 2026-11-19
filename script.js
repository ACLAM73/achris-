// Christine's chosen birthday song
const birthdaySong = document.getElementById("birthdaySong");
const musicButton = document.getElementById("musicToggle");

if (birthdaySong && musicButton) {
  musicButton.addEventListener("click", async () => {
    if (birthdaySong.paused) {
      try {
        await birthdaySong.play();
        musicButton.innerHTML = "♫ <span>Pause music</span>";
      } catch (error) {
        musicButton.innerHTML = "♫ <span>Tap to play</span>";
      }
    } else {
      birthdaySong.pause();
      musicButton.innerHTML = "♫ <span>Play our song</span>";
    }
  });
}

document.getElementById("secretBtn").addEventListener("click",()=>{
  const msg=document.getElementById("secretMessage");
  msg.hidden=!msg.hidden;
  document.getElementById("secretBtn").textContent=msg.hidden?"Tap for one more message ♡":"Close my little secret ♡";
});
