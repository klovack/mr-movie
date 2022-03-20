import classNames from "classnames";
import React from "react";
import { Genres, getMovieOrTVName, MovieResult, TVResult } from "../../types";
import "./Row.scss";

function RowPosterOverlay({
  isShowingOverview,
  movie,
  isTV,
}: RowPosterOverlayProps) {
  return (
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
            <span key={genreId} className="row__poster__overview__genres__item">
              {Genres[genreId]}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export interface RowPosterOverlayProps {
  isShowingOverview?: boolean;
  movie: TVResult | MovieResult;
  isTV?: boolean;
}

export default RowPosterOverlay;
