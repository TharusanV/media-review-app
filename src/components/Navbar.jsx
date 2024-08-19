import { Link } from 'react-router-dom';

const Navbar = () => {
  const navBarList = [
    { id: 1, name: "TV Shows", destination: "/" },
    { id: 2, name: "Books", destination: "/" },
    { id: 3, name: "Movies", destination: "/" },
    { id: 4, name: "Anime", destination: "/" },
  ];

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
    </>
  )
}

export default Navbar