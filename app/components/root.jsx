import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import Home from './Home'
// import Navbar from './navbar'
// import Footer from './footer'
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
          {/*} <Navbar /> 
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={Campuses} />
              <Redirect to="/" />
    
            </Switch>
          </main>
          <Footer />
          */}
        </div>
      </Router>

    )
  }
}

const mapState = null;

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Root));
