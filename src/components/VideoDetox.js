import React from "react";

import ReactPlayer from "react-player";
import detoxposter from "../images/detoxposter.png";
<link rel="stylesheet" href="/css/video-react.css" />;
const VideoDetox = () => {
  return (
    <>
      <div className="player-wrapper"></div>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=HkfTWw77YWU"
      />
    </>
  );
};

export default VideoDetox;
