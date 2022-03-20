import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./utils/requests";

function App() {
  return (
    <div className="App">
      {/* NAV */}

      <Banner />

      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} />
      <Row
        title="Trending Now"
        isFeatured={true}
        url={requests.fetchTrending}
      />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action" url={requests.fetchActionMovies} />
      <Row title="Comedy" url={requests.fetchComedyMovies} />
      <Row title="Horror" url={requests.fetchHorrorMovies} />
      <Row title="Romance" url={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries You Might Like"
        url={requests.fetchDocumentaries}
      />
      <Row title="Best TV Series" url={requests.fetchTVSeries} />
    </div>
  );
}

export default App;
