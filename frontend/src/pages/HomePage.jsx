import MediaGrid from "../components/MediaGrid";
import { useEffect, useState } from 'react';

const HomePage = ({p_allMedia}) => {
  
  const getLastFive = (mediaType) => {
    const mediaLast5 = p_allMedia.filter(item => item.mediaType === mediaType);
    return mediaLast5.slice(-5);
  };

  const lastFiveTVs = getLastFive("tvshow");
  const lastFiveBooks = getLastFive("book");
  const lastFiveMovies = getLastFive("movie");
  const lastFiveAnimes = getLastFive("anime");

  return (
    <div style={{marginTop: "1rem", width: "100%", height: "100%"}}>
      <div className="home-container">
        <h1>Recent TV Shows</h1>
        <MediaGrid p_mediaList={lastFiveTVs}/>
      </div>

      <div className="home-container">
        <h1>Recent Books</h1>
        <MediaGrid p_mediaList={lastFiveBooks}/>
      </div>

      <div className="home-container"> 
        <h1>Recent Movies</h1>
        <MediaGrid p_mediaList={lastFiveMovies}/>
      </div>

      <div className="home-container">
        <h1>Recent Animes</h1>
        <MediaGrid p_mediaList={lastFiveAnimes}/>
      </div>
    </div>
  )
}

export default HomePage;
