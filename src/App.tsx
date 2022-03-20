import React from "react";
import "./App.scss";
import Row from "./components/Row/Row";
import requests from "./utils/requests";

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action" url={requests.fetchActionMovies} />
      <Row title="Comedy" url={requests.fetchComedyMovies} />
      <Row title="Horror" url={requests.fetchHorrorMovies} />
      <Row title="Romance" url={requests.fetchHorrorMovies} />
      <Row
        title="Documentaries You Might Like"
        url={requests.fetchDocumentaries}
      />
      <Row title="Best TV Series" url={requests.fetchTVSeries} />
    </div>
  );
}

export default App;
