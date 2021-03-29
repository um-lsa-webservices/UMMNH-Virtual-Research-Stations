import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = ({ content, index }) => {
  if (content.main[index]) {
    if (content.main[index].video) {
      return (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            controls
            url={content.main[index].video}
            width="100%"
            height="100%"
          />
          ;
        </div>
      );
    }
    if (content.main[index].image) {
      return (
        <img
          alt={content.main[index].image.desc}
          src={content.main[index].image.source}
          width="100%"
          className="d-inline-block align-top"
        />
      );
    }
  }
};

export default VideoComponent;
