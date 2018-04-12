import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
 import Daycares from './allDaycare'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Footer from './footer'
import singleDaycare from './singleDaycare'
import favDaycares from './favDaycares'
// import { fetchCampuses, fetchStudents } from '../reducers';


export class Root extends Component {
  componentDidMount() {
    // this.props.initialCampuses();
    // this.props.initialStudents();
  }


  render() {

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
                <Route exact path="/daycares/favorites" component={favDaycares} />
                <Route path="/daycares/:daycareId" component={singleDaycare} />
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

const mapState = null;

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Root));
