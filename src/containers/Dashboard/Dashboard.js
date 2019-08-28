import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard" data-testid="main__dashboard">
        <div className="dashboard-card-wrapper">
          <NavLink to="/nowplaying">
            <div>
              <i className="fa fa-ticket" aria-hidden="true" />
              <h1>Now Playing</h1>
            </div>
          </NavLink>
        </div>
        <div className="dashboard-card-wrapper">
          <NavLink to="/upcoming">
            <div>
              <i className="fa fa-video-camera" aria-hidden="true" />
              <h1>Upcoming</h1>
            </div>
          </NavLink>
        </div>
        <div className="dashboard-card-wrapper">
          <NavLink to="/genres">
            <div>
              <i className="fa fa-film" aria-hidden="true" />
              <h1>Genres</h1>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Dashboard;
