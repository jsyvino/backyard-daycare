import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFavDaycares } from '../reducers/index'
import { Link } from 'react-router-dom'
import DaycareListItem from './daycareListItem'


export class FavDaycares extends Component {

    componentDidMount() {
        const user = this.props.currentUser
        if (user.name) this.props.getFavDaycares(user.id) ;
    }

    render() {
        const { favDaycares, currentUser } = this.props;
        return (
            <div className="page">
                <div className="pageTitle">
                    <h1>Saved Daycare Centers</h1>
                </div>
                {
                    !currentUser.name ?
                        <h4>You must be logged in to view Saved Daycare Centers</h4> :
                        (!favDaycares.length ?
                            <div>
                                <h4>You currently do not have any Saved Daycare Centers</h4>
                            </div>
                            :
                            <div>
                                <div className="DaycareList">
                                    {favDaycares.map((daycare) => {
                                        return (
                                            <DaycareListItem key={daycare.id} daycare={daycare} />
                                        )
                                    })}
                                </div>
                            </div>
                        )}
            </div>
        )
    }

}

const mapState = (state, ownProps) => {
    return {
        favDaycares: state.favDaycares,
        currentUser: state.currentUser
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        getFavDaycares: (userId) => {
            dispatch(fetchFavDaycares(userId));
        },
    }
}

const connectedDaycares = connect(mapState, mapDispatch)(FavDaycares)
export default connectedDaycares;
