import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default function Sidebar() {

  return (
      <div id= "side" className="links">
        <Link to="/daycares" >
          <button className="navLink" >All Daycare Centers</button>
        </Link>
        <Link to="/daycares/favorites" >
          <button className="navLink" >Favorites</button>
        </Link>
        <Link to="#" >
          <button className="navLink" >Map View</button>
        </Link>
        <Link to="#" >
          <button className="navLink" >Submit Question/Addition</button>
        </Link>
          <button onClick= {() => window.scrollTo(0, -80)} className="navLink" >Top</button>
      </div>
  );
}
