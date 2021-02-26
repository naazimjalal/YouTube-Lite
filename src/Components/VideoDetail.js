import React from "react";
import './video.css';
import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div style={{color: "white" }} className="Loader">Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
        <iframe
          frameBorder="0"
          className="videoplay"
          height="340"
          width="730"
          title="Video Player"
          src={videoSrc}
          allowfullscreen="allowfullscreen"
        /> 
    </React.Fragment>
  );
}
