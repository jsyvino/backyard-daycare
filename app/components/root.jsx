import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchDaycares, fetchFavDaycares, fetchLatLng } from '../reducers/index'
import Daycares from './allDaycare'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Footer from './footer'
import SingleDaycare from './singleDaycare'
import FavDaycares from './favDaycares'
import MapContainer from './mapContainer'
import MapView from './map2'
import mapContainer from './mapContainer';
// import { fetchCampuses, fetchStudents } from '../reducers';


export class Root extends Component {

  componentDidMount() {
    const user = this.props.currentUser
    const daycares = this.props.daycares;
    this.props.getDaycares();
    if (user.name) this.props.getFavDaycares(user.id);
  }

  convertToMarker (address) {

  }

  render() {
    let test = this;
    return (
      <Router>
        <div>
          <Navbar />
          <div className='theBody'>
            <a name="top"></a>
            <Sidebar />
            <main>
              <Switch>
                <Route exact path="/" component={Daycares} />
                <Route exact path="/daycares" component={Daycares} />
                <Route exact path="/daycares/map" component={mapContainer} />
                <Route exact path="/daycares/favorites" component={FavDaycares} />
                <Route path="/daycares/:daycareId" component={SingleDaycare} />
                <Redirect to="/" />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </Router>

    )
  }
}

const mapState = (state, ownProps) => {
  return {
    daycares: state.daycares,
    favDaycares: state.favDaycares,
    currentUser: state.currentUser
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    getDaycares: () => {
      dispatch(fetchDaycares());
    },
    getFavDaycares: (userId) => {
      dispatch(fetchFavDaycares(userId));
    },
  }
}

export default withRouter(connect(mapState, mapDispatch)(Root));
