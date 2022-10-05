import React from "react";
import videoBg from "../../assets/video.mp4";
import { DefaultPlayer as Video } from "react-html5video/dist";
// import "react-html5video/dist/style.css";
import "./video.css";

const VideoPage = () => {
  return (
    <div className="videoContainer">
      <video loop controls>
        <source src={videoBg} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoPage;
