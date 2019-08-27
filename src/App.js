import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Dashboard from './containers/Dashboard/Dashboard';
import Upcoming from './containers/Upcoming/Upcoming';
import MovieSearch from './containers/MovieSearch/MovieSearch';
import Genres from './containers/Genres/Genres';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import TmdbIcon from './assets/tmdbIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/search" component={MovieSearch} />
          <Route exact path="/nowplaying" component={NowPlaying} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/genres" component={Genres} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

function Navbar() {
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

export default App;
