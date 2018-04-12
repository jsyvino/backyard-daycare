import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDaycares, fetchFavDaycares } from '../reducers/index'
import { Link } from 'react-router-dom'
import DaycareListItem from './daycareListItem'


export class Daycares extends Component {

    componentDidMount() {
        const user = this.props.currentUser
        this.props.getDaycares();
        if (user.name) this.props.getFavDaycares(user.id) ;
    }
    render() {
        window.scrollTo(0, 80)
        const daycares = this.props.daycares;
        return (
            <div className="page">
                <div className="pageTitle">
                    <h1>Daycare Centers</h1>
                </div>
                {!daycares.length ?
                    <div>
                        <h4>There are currently no Daycare Centers in the database</h4>
                    </div>
                    :
                    <div>
                        <div className="DaycareList">
                            {daycares.map((daycare) => {
                                return (
                                     <DaycareListItem key={daycare.id} daycare={daycare} />
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
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

const connectedDaycares = connect(mapState, mapDispatch)(Daycares)
export default connectedDaycares;
