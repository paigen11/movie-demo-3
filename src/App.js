import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Dashboard from './containers/Dashboard/Dashboard';
import Upcoming from './containers/Upcoming/Upcoming';
import MovieSearch from './containers/MovieSearch/MovieSearch';
import Genres from './containers/Genres/Genres';
import GenreList from './containers/Genres/GenreList';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import Header from './containers/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <LastLocationProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/search" component={MovieSearch} />
            <Route exact path="/nowplaying" component={NowPlaying} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/genres" component={Genres} />
            <Route
              exact
              path="/genres/:genreName/:genreId"
              component={GenreList}
            />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Switch>
        </LastLocationProvider>
      </Router>
    </div>
  );
}

export default App;
