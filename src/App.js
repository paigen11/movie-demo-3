import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NowPlaying from './containers/NowPlaying';
import MovieSearch from './containers/MovieSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={NowPlaying} />
            <Route exact path="/search" component={MovieSearch} />
          </Switch>
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
