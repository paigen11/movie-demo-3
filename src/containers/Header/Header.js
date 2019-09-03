import React from 'react';
import { NavLink } from 'react-router-dom';
import TmdbIcon from '../../assets/tmdbIcon.png';
import './Header.scss';

function Header() {
  return (
    <nav className="navbar-wrapper">
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink to="/">
            <img src={TmdbIcon} alt="logo" />
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/nowplaying">Now Playing</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/upcoming">Coming Soon</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/search">Movie Search</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/genres">Genres</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
