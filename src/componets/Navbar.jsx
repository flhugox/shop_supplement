import { Transition } from '@headlessui/react';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    /*
    <div className="navbar">
    <div className="logo">Shopio</div>
     <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
     </ul>
  </div>*/

    <footer className="navbar">
      <nav className="navbarNav" >
        <ul className="navbarListItems">
        <li className="navbarListItem">
            <NavLink to="/" className="navbarListItem">
            <img width="80" height="80" src="https://image.shutterstock.com/image-vector/vitamin-c-icon-pill-capsule-600w-1543259795.jpg"></img>
            </NavLink>
          </li>
          <li className="navbarListItem">
            <NavLink to="/" className="navbarListItem">
            <span className="material-icons">
              home
            </span>
            <p>Home</p>
            </NavLink>
          </li>
          <li className="navbarListItem">
            <NavLink to="category/vitaminas">
            <span className="material-icons">
              grade
            </span>
            <p>Vitaminas</p>
            </NavLink>
          </li>
          <li className="navbarListItem">
          <NavLink to="category/suplementos">
            <span className="material-icons">
              store
            </span>
            <p>Suplementos</p>
            </NavLink>
          </li>
          <li className="navbarListItem">
          <NavLink to="category/otros">
            <span className="material-icons">
              face
            </span>
            <p>Otros</p>
            </NavLink>
          </li>

        </ul>

      </nav>
    </footer>

  );
}
export default Navbar