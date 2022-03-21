import React from "react";
import YouTube, { Options } from "react-youtube";

function Trailer({ trailerId }: TrailerProps) {
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 3.5,
      controls: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      rel: 0,
    },
  };

  return (
    <>
      <YouTube videoId={trailerId} opts={opts} />
    </>
  );
}

export interface TrailerProps {
  trailerId: string;
}

export default Trailer;
