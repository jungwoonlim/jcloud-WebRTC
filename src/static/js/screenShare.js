const getScreenShare = document.getElementById("screenShare");
const button = document.getElementById("startBtn");
const backBtn = document.getElementById("backSelect");

// access audio & video
const mediaStream = {
  audio: false,
  video: true,
};

navigator.mediaDevices.getDisplayMedia =
  navigator.mediaDevices.getDisplayMedia ||
  navigator.mediaDevices.webkitGetUserMedia ||
  navigator.mediaDevices.mozGetUserMedia;

const getScreenStream = (stream) => {
  getScreenShare.srcObject = stream;
};

const getScreenError = (err) => {
  console.log("error :\n", err);

  alert("카메라와 마이크를 허용해주세요");
};

button.addEventListener("click", () => {
  navigator.mediaDevices
    .getDisplayMedia(mediaStream)
    .then(getScreenStream)
    .catch(getScreenError);
});

backBtn.addEventListener("click", () => {
  location.href = "/";
});
