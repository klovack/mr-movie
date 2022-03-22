import React from "react";
import YouTube, { Options } from "react-youtube";

function Trailer({ trailerId, width = "100%", height = "400" }: TrailerProps) {
  const opts: Options = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      start: 2,
    },
  };

  return (
    <div>
      <YouTube videoId={trailerId} opts={opts} />
    </div>
  );
}

export interface TrailerProps {
  trailerId: string;
  /** Default: `100%` */
  width?: string;
  /** Default: `400px` */
  height?: string;
}

export default Trailer;
