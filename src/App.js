import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Dashboard from './containers/Dashboard/Dashboard';
import Upcoming from './containers/Upcoming/Upcoming';
import MovieSearch from './containers/MovieSearch';
import Genres from './containers/Genres/Genres';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/search" component={MovieSearch} />
          <Route exact path="/nowplaying" component={NowPlaying} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/genres" component={Genres} />
        </div>
      </Router>
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Movies in Theaters Now</Link>
      </li>
      <li>
        <Link to="/search">Movie Search</Link>
      </li>
    </ul>
  );
}

export default App;
