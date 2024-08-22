import MediaGrid from "../components/MediaGrid";
import { useEffect, useState } from 'react';

const AnimePage = ({p_fetchMediaMethod}) => {
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