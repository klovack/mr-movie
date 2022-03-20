import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  DiscoverResponse,
  getMovieOrTVName,
  isListTVResult,
  MovieResult,
  TVResult,
} from "../../types";
import httpClient from "../../utils/axios";
import "./Row.scss";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Row({ title, url, isFeatured, displayLimit }: RowProps) {
  const [movies, setMovies] = useState<MovieResult[] | TVResult[]>([]);
  const [isTV, setIsTV] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const req = await httpClient.get(url);

      if (req.status !== 200) {
        console.error(`Failed to fetch data for ${title}`);
        return;
      }
      setMovies((req.data as DiscoverResponse).results);
      return req;
    }

    fetchData();
  }, [url, title]);

  useEffect(() => {
    setIsTV(isListTVResult(movies));
  }, [movies]);

  const rowPosterFeaturedClass = classNames("row__poster", {
    featured: isFeatured,
  });

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie: MovieResult | TVResult) => {
          if (movie.poster_path) {
            return (
              <img
                className={rowPosterFeaturedClass}
                key={movie.id}
                src={`${IMAGE_URL}${
                  isFeatured ? movie.poster_path : movie.backdrop_path
                }`}
                alt={getMovieOrTVName(movie, isTV)}
              />
            );
          }

          return (
            <div key={movie.id} className="row__poster no-poster">
              <p className="row__poster__title">
                {getMovieOrTVName(movie, isTV)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;

export interface RowProps {
  title: string;
  url: string;
  isFeatured?: boolean;
  displayLimit?: number;
}
