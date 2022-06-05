let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
const tikTikAudio = new Audio('./assets/audio/tickTok.mp3');

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let hRotation = 30 * h + m / 2;
  let mRotation = 6 * m;
  let sRotation = 6 * s;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
  tikTikAudio.play();
}, 1000);
