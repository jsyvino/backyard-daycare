import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchUser, setUser, getFavDaycares } from "../reducers/index"
import { connect } from 'react-redux'

export function Navbar(props) {

  return (
    <nav>
      <Link to="/" >
        <button className="navLink" >Home</button>
      </Link>
      <h1>Daycare Database</h1>
      <div className="links">
        <Link to="/daycares" >All Centers</Link>
        <Link to="/daycares/favorites" > ❤ s </Link>
        <Link to="/daycares/map" >Map</Link>
      </div>
      <Link to="/" >
        <button
          onClick={(event) => { props.userLogin(event, 1, props.user.name) }}
          className="navLink" >{props.user.name ? 'Logout' : 'Login'}</button>
      </Link>
    </nav>
  );
}


const mapState = (state, ownProps) => {
  return {
    user: state.currentUser,
    favDaycares: state.favDaycares,
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    userLogin: (event, userId, name) => {
      if (name) {
        event.preventDefault();
        dispatch(setUser({}));
        dispatch(getFavDaycares([]));
      } else {
        event.preventDefault();
        dispatch(fetchUser(userId));
      }
    }
  }
}

const connectedDaycares = connect(mapState, mapDispatch)(Navbar)
export default connectedDaycares;
