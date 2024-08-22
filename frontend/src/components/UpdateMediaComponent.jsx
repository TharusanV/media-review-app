import { useState } from "react";

const UpdateMediaComponent = ({p_updateMedia, p_turnOffPopUps}) => {

  const [mediaID, setMediaID] = useState(0);

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [imagePath, setImagePath] = useState('');
  const [mediaType, setMediaType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing

    p_updateMedia(mediaID, { title, genre, description, rating, imagePath, mediaType })
    .then(console.log("success"))
    .catch(error => {console.log(error);});

    setTitle('');
    setGenre('');
    setDescription('');
    setRating(0);
    setImagePath('');
  };

  return (
    <div className="popup">
      <h2>Update Component</h2>

      <button onClick={() => p_turnOffPopUps()}>Close</button> 

      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="number" value={mediaID} onChange={(e) => setMediaID(e.target.value)} required/>
        </div>
        
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </div>

        <div>
          <label>Genre:</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required/>
        </div>
        
        <div>
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required/>
        </div>

        <div>
          <label>Image Path:</label>
          <input type="text" value={imagePath} onChange={(e) => setImagePath(e.target.value)} required/>
        </div>

        <div>
          <label>Media Type:</label>
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} required>
            <option value="" disabled>Select media type</option>
            <option value="tvshow">tvshow</option>
            <option value="movie">movie</option>
            <option value="book">book</option>
            <option value="anime">anime</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateMediaComponent