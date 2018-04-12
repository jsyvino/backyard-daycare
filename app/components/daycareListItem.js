import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleDaycare } from '../reducers/index'
import { Link, withRouter } from 'react-router-dom'

export function DaycareListItem(props) {
    const { daycare, currentUser, toggleFav } = props;
    const favorite = daycare.userDaycares ? daycare.userDaycares[0].favorite : daycare.userDaycare.favorite
    return (
        <div className="detailViewSing">
            <img id="profile-pic" src={daycare.dayPics[0].imgUrl} />
            <div className="detailInfo">
                <div className="nameStar">
                    <Link to={`/daycares/${daycare.id}`}>
                        <h4 className="title" >{daycare.name}</h4>
                    </Link>
                    <span
                        onClick= {(event) => toggleFav(event, currentUser.id, daycare.id)}
                        id="star"
                        className={favorite ? 'fav' : 'notFav'} >
                        ★</span>
                </div>
                <div className="sameLine">
                    <h5>Style: {daycare.style}</h5>
                    <h5>Price: ${daycare.price} {daycare.priceUnit}</h5>
                </div>
                <h6>{daycare.description}</h6>
            </div>
        </div>
    )
}

const mapState = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        toggleFav: (event, userId, daycareId) => {
            event.preventDefault();
            dispatch(toggleDaycare(userId, daycareId))
        }
    }
}

const connectedDaycare = withRouter(connect(mapState, mapDispatch)(DaycareListItem))
export default connectedDaycare;