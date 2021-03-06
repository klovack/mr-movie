import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import {
  DiscoverResponse,
  getMovieOrTVName,
  isListTVResult,
  MovieResult,
  TVResult,
} from "../../types";
import httpClient from "../../utils/axios";
import "./Row.scss";
import RowPoster from "./RowPoster";
import Trailer from "../Trailer/Trailer";

const DEBOUNCE_TIME = 1500;

function Row({ title, url, isFeatured, displayLimit }: RowProps) {
  const [movies, setMovies] = useState<MovieResult[] | TVResult[]>([]);
  const [isTV, setIsTV] = useState(false);
  const [movieTrailerId, setMovieTrailerId] = useState("");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

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

  const getMovieTrailer = debounce(async (movie: MovieResult | TVResult) => {
    const movieTrailerUrl = await movieTrailer(getMovieOrTVName(movie));

    if (!movieTrailerUrl) {
      console.error("No movie Trailer for this!");
      return;
    }

    const urlParams = new URLSearchParams(new URL(movieTrailerUrl).search);

    setMovieTrailerId(urlParams.get("v") ?? "");
    setIsTrailerOpen(true);
  }, DEBOUNCE_TIME);

  const closeMovieTrailer = debounce(() => {
    setIsTrailerOpen(false);
    setMovieTrailerId("");
    getMovieTrailer.cancel();
  }, DEBOUNCE_TIME / 15);

  return (
    <div onMouseLeave={closeMovieTrailer} className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie: MovieResult | TVResult) => (
          <RowPoster
            key={movie.id}
            movie={movie}
            isTV={isTV}
            isFeatured={isFeatured}
            onMouseEnter={() => {
              getMovieTrailer(movie);
            }}
            onClick={() => {
              setIsTrailerOpen(true);
              getMovieTrailer(movie);
            }}
          />
        ))}
      </div>

      {isTrailerOpen && movieTrailerId && (
        <div className="row__trailer">
          <Trailer trailerId={movieTrailerId} />
        </div>
      )}
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
