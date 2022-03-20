import classNames from "classnames";
import React, { useState } from "react";
import { Genres, getMovieOrTVName, MovieResult, TVResult } from "../../types";
import "./Row.scss";
import RowPosterOverlay from "./RowPosterOverlay";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function RowPoster({
  movie,
  isFeatured = false,
  isTV = false,
}: RowPosterProps) {
  const [isShowingOverview, setIsShowingOverview] = useState(false);

  const rowPosterFeaturedClass = classNames("row__poster__image", {
    featured: isFeatured,
  });

  if (movie.backdrop_path || (isFeatured && movie.poster_path)) {
    return (
      <div
        onMouseEnter={() => setIsShowingOverview(true)}
        onMouseLeave={() => setIsShowingOverview(false)}
        className="row__poster"
      >
        <img
          className={rowPosterFeaturedClass}
          src={`${IMAGE_URL}${
            isFeatured ? movie.poster_path : movie.backdrop_path
          }`}
          alt={getMovieOrTVName(movie, isTV)}
        />
        <RowPosterOverlay
          movie={movie}
          isTV={isTV}
          isShowingOverview={isShowingOverview}
        />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsShowingOverview(true)}
      onMouseLeave={() => setIsShowingOverview(false)}
      className="row__poster no-poster"
    >
      <p className="row__poster__title">{getMovieOrTVName(movie, isTV)}</p>
      <RowPosterOverlay
        movie={movie}
        isTV={isTV}
        isShowingOverview={isShowingOverview}
      />
    </div>
  );
}

export interface RowPosterProps {
  movie: MovieResult | TVResult;
  isFeatured?: boolean;
  isTV?: boolean;
}

export default RowPoster;
