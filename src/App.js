import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NowPlaying from './containers/NowPlaying';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={NowPlaying} />
        </div>
      </Router>
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Now Playing Movies</Link>
      </li>
    </ul>
  );
}

export default App;
