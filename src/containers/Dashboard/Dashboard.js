import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.scss';

export class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard" data-testid="main__dashboard">
        <NavLink to="/nowplaying">
          <div>
            {/* <i className="material-icons">vpn_key</i> */}
            <h2>Now Playing</h2>
          </div>
        </NavLink>
        <NavLink to="/upcoming">
        <div>
            {/* <i className="material-icons">add_location</i> */}
            <h2>Upcoming</h2>
        </div>
        </NavLink>
        <NavLink to="/genres">
          <div>
            {/* <i className="material-icons">insert_chart</i> */}
            <h2>Genres</h2>
          </div>
        </NavLink>
      </div>
    );
  }
}


export default Dashboard;
