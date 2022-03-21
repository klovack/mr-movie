import classNames from "classnames";
import React, { useState } from "react";
import * as movieTrailer from "movie-trailer";
import { getMovieOrTVName, MovieResult, TVResult } from "../../types";
import Trailer from "../Trailer/Trailer";
import "./Row.scss";
import RowPosterOverlay from "./RowPosterOverlay";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function RowPoster({
  movie,
  isFeatured = false,
  isTV = false,
}: RowPosterProps) {
  const [isShowingOverview, setIsShowingOverview] = useState(false);
  const [movieTrailerId, setMovieTrailerId] = useState("");

  const rowPosterFeaturedClass = classNames("row__poster__image", {
    featured: isFeatured,
  });

  const enterOverview = async () => {
    setIsShowingOverview(true);
    const movieTrailers = await movieTrailer(null, {
      id: true,
      tmdbId: movie.id,
      apiKey: process.env.REACT_APP_TMDB_API_KEY_V3,
    });

    console.log(movieTrailers);
  };

  const exitOverview = () => {
    setIsShowingOverview(false);
    setMovieTrailerId("");
  };

  if (movie.backdrop_path || (isFeatured && movie.poster_path)) {
    return (
      <div
        onMouseEnter={enterOverview}
        onMouseLeave={exitOverview}
        className="row__poster"
      >
        <img
          className={rowPosterFeaturedClass}
          src={`${IMAGE_URL}${
            isFeatured ? movie.poster_path : movie.backdrop_path
          }`}
          alt={getMovieOrTVName(movie)}
        />
        <RowPosterOverlay movie={movie} isShowingOverview={isShowingOverview} />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={enterOverview}
      onMouseLeave={exitOverview}
      className="row__poster no-poster"
    >
      <p className="row__poster__title">{getMovieOrTVName(movie)}</p>
      <RowPosterOverlay movie={movie} isShowingOverview={isShowingOverview} />
      {/* <Trailer /> */}
    </div>
  );
}

export interface RowPosterProps {
  movie: MovieResult | TVResult;
  isFeatured?: boolean;
  isTV?: boolean;
}

export default RowPoster;
