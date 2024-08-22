import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddMediaComponent from './AddMediaComponent';
import UpdateMediaComponent from './UpdateMediaComponent';
import DeleteMediaComponent from './DeleteMediaComponent';

const Navbar = ({p_createMedia, p_updateMedia, p_deleteMedia}) => {
  const navBarList = [
    { id: 1, name: "TV Shows", destination: "/tvshow" },
    { id: 2, name: "Books", destination: "/book" },
    { id: 3, name: "Movies", destination: "/movie" },
    { id: 4, name: "Anime", destination: "/anime" },
  ];

  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showUpdateComponent, setShowUpdateComponent] = useState(false);
  const [showDeleteComponent, setShowDeleteComponent] = useState(false);

  const toggleAddComponent = () => {
    setShowAddComponent(true);  
    setShowUpdateComponent(false); 
    setShowDeleteComponent(false); 
  };

  const toggleUpdateComponent = () => {
    setShowUpdateComponent(true);
    setShowAddComponent(false);
    setShowDeleteComponent(false);     
  };

  const toggleDeleteComponent = () => {
    setShowDeleteComponent(true); 
    setShowAddComponent(false);  
    setShowUpdateComponent(false);   
  };

  const turnOffPopUps = () => {
    setShowAddComponent(false);  
    setShowUpdateComponent(false); 
    setShowDeleteComponent(false); 
  }

  return (
    <>
      <nav className="navbar">
        <Link to='/' className="navbar-link">
          <h2 className="navbar-heading">Your Media</h2>
        </Link>

        <ul className="navbar-menu">
          {navBarList.map(menuItem => (
            <li key={menuItem.id} className="navbar-item">
              <Link to={menuItem.destination}>
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sub-navbar">
        <ul className="navbar-menu">
          <button onClick={() => toggleAddComponent()}>Add</button> 
          <button onClick={() => toggleUpdateComponent()}>Update</button> 
          <button onClick={() => toggleDeleteComponent()}>Delete</button> 
        </ul>
      </nav>

      {showAddComponent && <AddMediaComponent p_createMedia={p_createMedia} p_turnOffPopUps={turnOffPopUps} />}

      {showUpdateComponent && <UpdateMediaComponent p_updateMedia={p_updateMedia} p_turnOffPopUps={turnOffPopUps}/>}

      {showDeleteComponent && <DeleteMediaComponent p_deleteMedia={p_deleteMedia} p_turnOffPopUps={turnOffPopUps}/>}

    </>
  )
}

export default Navbar