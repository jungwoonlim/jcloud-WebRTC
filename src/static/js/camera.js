const getCamera = document.getElementById("camera");
const button = document.getElementById("startBtn");

// access audio & video
const mediaStream = {
  audio: true,
  video: true,
};

navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

const success = (stream) => {
  console.log("success :\n", stream);

  getCamera.srcObject = stream;
};

const error = (err) => {
  console.log("error :\n", err);

  alert("카메라와 마이크를 허용해주세요");
};

button.addEventListener("click", () => {
  navigator.getUserMedia(mediaStream, success, error);
});
