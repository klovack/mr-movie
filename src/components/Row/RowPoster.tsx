import classNames from "classnames";
import React, { useState } from "react";
import { Genres, getMovieOrTVName, MovieResult, TVResult } from "../../types";
import "./Row.scss";

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

  if (movie.poster_path) {
    return (
      <div
        onMouseEnter={() => setIsShowingOverview(true)}
        onMouseLeave={() => setIsShowingOverview(false)}
        className="row__poster"
        key={movie.id}
      >
        <img
          className={rowPosterFeaturedClass}
          src={`${IMAGE_URL}${
            isFeatured ? movie.poster_path : movie.backdrop_path
          }`}
          alt={getMovieOrTVName(movie, isTV)}
        />
        <div
          className={classNames("row__poster__overview", {
            hidden: !isShowingOverview,
          })}
        >
          <h4 className="row__poster__overview__title">
            {getMovieOrTVName(movie, isTV)}
          </h4>
          <p className="row__poster__overview__genres">
            {movie.genre_ids.map((genreId) => {
              return (
                <span className="row__poster__overview__genres__item">
                  {Genres[genreId]}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div key={movie.id} className="row__poster no-poster">
      <p className="row__poster__title">{getMovieOrTVName(movie, isTV)}</p>
    </div>
  );
}

export interface RowPosterProps {
  movie: MovieResult | TVResult;
  isFeatured?: boolean;
  isTV?: boolean;
}

export default RowPoster;
