import React from 'react';
import './App.scss';
import Row from './components/Row/Row';
import requests from './utils/requests';

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Originals"
        url={requests.fetchNetflixOriginals}
      />
      <Row
        title="Trending Now"
        url={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        url={requests.fetchTopRated}
      />
    </div>
  );
}

export default App;
