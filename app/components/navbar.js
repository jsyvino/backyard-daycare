import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav>
      <Link to="/" >
        <button className="navLink" >Home</button>
      </Link>
      <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <div className="links">
        <Link to="/campuses" >
          <button className="navLink" >Campuses</button>
        </Link>
        <Link to="/students" >
          <button className="navLink" >Students</button>
        </Link>
      </div>
    </nav>
  );
}
