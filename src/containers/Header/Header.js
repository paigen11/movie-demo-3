import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import TmdbIcon from '../../assets/tmdb-power.png';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar-wrapper">
      <Breakpoint medium up>
        <ul className="navbar-links">
          <li className="navbar-link-logo">
            <NavLink to="/">
              <img src={TmdbIcon} alt="logo" />
            </NavLink>
          </li>
          <div className="navbar-top-links">
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
          </div>
        </ul>
      </Breakpoint>
      <Breakpoint small down>
        <Sidebar />
      </Breakpoint>
    </nav>
  );
};

export default Header;
