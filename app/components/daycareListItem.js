import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchDaycare } from '../reducers/index'
import { Link, withRouter } from 'react-router-dom'

export default function DaycareListItem(props) {
    const daycare = props.daycare;
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

// const mapState = (state, ownProps) => {
//     return {
//         daycare: state.selectedDaycare,
//     }
// }

// const mapDispatch = (dispatch, ownProps) => {
//     return {
//         setDaycare: (daycareId) => {
//             dispatch(fetchDaycare(daycareId))
//         }
//     }
// }

// const connectedDaycare = withRouter(connect(mapState, mapDispatch)(DaycareListItem))
// export default connectedDaycare;