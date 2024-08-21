import { Link } from 'react-router-dom';

//'../assets/batman_Dark_Knight.jpg'

const MediaGrid = ({p_mediaList}) => {
  return (
    <div className='media-grid-container'>
      {p_mediaList.map((media) => (
        <div key={media.id} className='media-item'>
          <Link to={`/${media.mediaType}/${media.id}`}>
            <img src={`src/assets/${media.imagePath}`} alt="Media Image" className="icon"/>
            <p style={{fontWeight: "bold", fontSize: "12px"}}>{media.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MediaGrid