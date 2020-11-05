import routes from "../routes";

export const home = (req, res) => {
  res.render("Home", { title: "WebRTC" });
};

export const camera = (req, res) => {
  res.render("Camera", { title: "camera" });
};

export const filter = (req, res) => {
  res.render("Filter", { title: "filter" });
};

export const screenShare = (req, res) => {
  res.render("ScreenShare", { title: "Screen Share" });
};

export const videoConference = (req, res) => {
  res.render("VideoConference", { title: "Video Conference" });
};
