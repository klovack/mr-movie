import classNames from "classnames";
import React, { useState } from "react";
import { getMovieOrTVName, MovieResult, TVResult } from "../../types";
import "./Row.scss";
import RowPosterOverlay from "./RowPosterOverlay";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function RowPoster({
  movie,
  isFeatured = false,
  onMouseEnter,
  onMouseExit,
  onClick,
}: RowPosterProps) {
  const [isShowingOverview, setIsShowingOverview] = useState(false);

  const rowPosterFeaturedClass = classNames("row__poster__image", {
    featured: isFeatured,
  });

  const enterOverview = async () => {
    setIsShowingOverview(true);
    onMouseEnter && onMouseEnter();
  };

  const exitOverview = () => {
    setIsShowingOverview(false);
    onMouseExit && onMouseExit();
  };

  if (movie.backdrop_path || (isFeatured && movie.poster_path)) {
    return (
      <div
        onMouseEnter={enterOverview}
        onMouseLeave={exitOverview}
        onClick={onClick}
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
  onMouseEnter?: () => any;
  onMouseExit?: () => any;
  onClick?: () => any;
}

export default RowPoster;
