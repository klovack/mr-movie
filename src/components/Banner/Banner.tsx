import React, { useEffect, useState } from "react";
import { getMovieOrTVName, MovieResult, TVResult } from "../../types";
import httpClient from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.scss";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState<MovieResult | TVResult | null>(null);

  useEffect(() => {
    async function fetchData() {
      const req = await httpClient.get(requests.fetchTrending);

      if (req.status !== 200) {
        console.error("Failed to fetch data for Banner");
        return;
      }

      const movies = req.data.results as MovieResult[];

      if (!movies || movies.length === 0) {
        console.error("No movie is trending");
        return;
      }

      let pickedMovie;
      while (!pickedMovie || !pickedMovie.backdrop_path) {
        pickedMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(pickedMovie);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {movie && (
        <header
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              ${IMAGE_URL}${movie.backdrop_path}
            )`,
            backgroundPosition: "top center",
          }}
          className="banner"
        >
          <div className="banner__contents">
            {/* title */}
            <h1 className="banner__title">{getMovieOrTVName(movie)}</h1>

            {/* Descriptions */}
            <p className="banner__description">{movie.overview}</p>

            {/* Div with 2 buttons */}
            <div className="banner__buttons">
              <button className="banner__button play">Play</button>
              <button className="banner__button">More Info</button>
            </div>
          </div>

          <div className="banner__fade-bottom"></div>
        </header>
      )}
    </>
  );
}

export default Banner;
