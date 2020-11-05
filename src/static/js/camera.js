const getCamera = document.getElementById("camera");
const button = document.getElementById("startBtn");
const backBtn = document.getElementById("backSelect");

// access audio & video
const mediaStream = {
  audio: true,
  video: true,
};

navigator.mediaDevices.getUserMedia =
  navigator.mediaDevices.getUserMedia ||
  navigator.mediaDevices.webkitGetUserMedia ||
  navigator.mediaDevices.mozGetUserMedia;

const getCameraStream = (stream) => {
  getCamera.srcObject = stream;
};

const getCameraError = (err) => {
  console.log("error :\n", err);

  alert("카메라와 마이크를 허용해주세요");
};

button.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia(mediaStream)
    .then(getCameraStream)
    .catch(getCameraError);
});

backBtn.addEventListener("click", () => {
  location.href = "/";
});
