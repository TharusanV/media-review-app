import MediaGrid from "../components/MediaGrid";
import { useEffect, useState } from 'react';

const TVShowPage = ({p_fetchMediaMethod}) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    p_fetchMediaMethod("tvshow")
        .then(data => {setMedia(data);})
        .catch(error => {console.log(error);});
  }, []);
  
  return (
    <div style={{marginTop: "1rem"}}>
      <div className="home-container">
        <h1>Your TV Shows</h1>
        <MediaGrid p_mediaList={media}/>
      </div>
    </div>
  )
}


export default TVShowPage