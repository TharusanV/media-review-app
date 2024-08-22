import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleMediaPage = ({p_fetchMediaByID}) => {
  const {id} = useParams();
  const [media, setMedia] = useState(null)

  useEffect(() => {
    p_fetchMediaByID(id)
        .then(data => {
          setMedia(data);
        })
        .catch(error => {console.log(error);});
  }, []);
  
  return (
    <>
      {media && ( 
        <div className="single-media-container">
          <div className="left-side">
            <img src={`../src/assets/${media.imagePath}`} alt="Media Image" className="icon" />
          </div>

          <div className="right-side">
            <h1>Title: </h1>
            <p>{media.title}</p>
            <h1>Genre: </h1>
            <p>{media.genre}</p>
            <h1>Rating: </h1>
            <p>{media.rating}</p>
            <h1>Media Type: </h1>
            <p>{media.mediaType}</p>
            <h1>Description:</h1>
            <p>{media.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleMediaPage