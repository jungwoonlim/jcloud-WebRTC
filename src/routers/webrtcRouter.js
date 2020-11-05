import express from "express";
import {
  camera,
  filter,
  home,
  screenShare,
  videoConference,
} from "../controllers/webrtcController";
import routes from "../routes";

const webrtcRouter = express.Router();

webrtcRouter.get(routes.home, home);
webrtcRouter.get(routes.camera, camera);
webrtcRouter.get(routes.filter, filter);
webrtcRouter.get(routes.screenShare, screenShare);
webrtcRouter.get(routes.videoConference, videoConference);

export default webrtcRouter;
