import MediaGrid from "../components/MediaGrid";
import { useEffect, useState } from 'react';

const AnimePage = ({p_fetchMediaMethod, p_createMedia, p_updateMedia, p_deleteMedia}) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    p_fetchMediaMethod("anime")
        .then(data => {setMedia(data);})
        .catch(error => {console.log(error);});
  }, []);
  
  return (
    <div style={{marginTop: "1rem"}}>
      <MediaGrid p_mediaList={media}/>
    </div>
  )
}

export default AnimePage