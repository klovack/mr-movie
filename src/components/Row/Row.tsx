import React, { useEffect, useState } from "react";
import {
  DiscoverResponse,
  isListTVResult,
  MovieResult,
  TVResult,
} from "../../types";
import httpClient from "../../utils/axios";
import "./Row.scss";
import RowPoster from "./RowPoster";

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

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie: MovieResult | TVResult) => (
          <RowPoster
            key={movie.id}
            movie={movie}
            isTV={isTV}
            isFeatured={isFeatured}
          />
        ))}
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
