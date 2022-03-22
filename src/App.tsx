import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import Trailer from "./components/Trailer/Trailer";
import requests from "./utils/requests";

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} />
      <Row
        title="Trending Now"
        isFeatured={true}
        url={requests.fetchTrending}
      />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row
        title="Included with Prime"
        isFeatured={true}
        url={requests.fetchAmazonOriginals}
      />
      <Row title="Action" url={requests.fetchActionMovies} />
      <Row title="Comedy" url={requests.fetchComedyMovies} />
      <Row
        title="Only on Disney+"
        isFeatured={true}
        url={requests.fetchDisneyPlusOriginals}
      />
      <Row title="Horror" url={requests.fetchHorrorMovies} />
      <Row title="Romance" url={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries You Might Like"
        url={requests.fetchDocumentaries}
      />
      <Row title="Best TV Series" url={requests.fetchTVSeries} />
      <Row
        title="More on Apple TV+"
        isFeatured={true}
        url={requests.fetchAppleTVOriginals}
      />
    </div>
  );
}

export default App;
