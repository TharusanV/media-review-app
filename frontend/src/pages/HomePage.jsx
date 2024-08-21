import MediaGrid from "../components/MediaGrid";
import { useEffect, useState } from 'react';

const HomePage = ({p_allMedia}) => {

  return (
    <div style={{marginTop: "1rem"}}>
      <MediaGrid p_mediaList={p_allMedia}/>
    </div>
  )
}

export default HomePage;
