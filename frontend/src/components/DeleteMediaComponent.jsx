import { useState } from "react";

const DeleteMediaComponent = ({p_deleteMedia, p_turnOffPopUps}) => {

  const [mediaID, setMediaID] = useState(0);

  const handleDelete = () => {
    p_deleteMedia(mediaID)
    .then(console.log("success"))
    .catch(error => {console.log(error);});
  };

  return (
    <div className="popup">
      <h2>Delete Component</h2>

      <button onClick={() => p_turnOffPopUps()}>Close</button> 
    
      <input type="number" value={mediaID} onChange={(e) => setMediaID(e.target.value)}/>

      <button onClick={handleDelete}>Submit</button>
    </div>
  )
}

export default DeleteMediaComponent