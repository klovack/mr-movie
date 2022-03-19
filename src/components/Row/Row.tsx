import React, { useEffect, useState } from "react";
import {
  DiscoverResponse,
  getMovieOrTVName,
  isListTVResult,
  isTVResult,
  MovieResult,
  TVResult,
} from "../../types";
import httpClient from "../../utils/axios";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Row({ title, url }: RowProps) {
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

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((m: MovieResult | TVResult) => {
          if (m.poster_path) {
            return (
              <img
                key={m.id}
                src={`${IMAGE_URL}${m.poster_path}`}
                alt={getMovieOrTVName(m, isTV)}
              />
            );
          }

          if (isTV) {
            return <p key={m.id}>{(m as TVResult).name}</p>;
          }

          return <p key={m.id}>{(m as MovieResult).title}</p>;
        })}
      </div>
    </div>
  );
}

export default Row;

export interface RowProps {
  title: string;
  url: string;
}
