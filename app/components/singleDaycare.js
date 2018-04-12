import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDaycare } from '../reducers/index'
import { Link, withRouter } from 'react-router-dom'

export class SingleDaycare extends Component {

    componentDidMount() {
        let daycareId = this.props.match.params.daycareId;
        this.props.setDaycare(daycareId)
    }

    render() {
        const daycare = this.props.daycare;
        window.scrollTo(0, 80)
        let favorite = false;
        if (daycare.name) {
            favorite = this.props.daycare.userDaycares[0].favorite
        }
        //
        return (
            <div className="singleView">
                <div className="detailViewSing">

                    {
                        daycare.name ?
                            <div className="itemInfoSing">
                                <img id="big-profile-pic" src={daycare.dayPics[0].imgUrl} />
                                <h2>{daycare.name}</h2>
                                <div className="nameStar">
                                    <span
                                        id="star"
                                        className={favorite ? 'fav' : 'notFav'} >
                                        ★</span>
                                </div>
                                <h3>{daycare.style}</h3>
                                <h4>Price: ${daycare.price} {daycare.priceUnit}</h4>
                                <h4>{daycare.description}</h4>
                                <h3>{daycare.hours}</h3>
                                <div id='contact'>
                                    <h4 className="contact" >Contact Info:</h4>
                                    <h5 className="contact" ><b>Contact Person: </b>{daycare.contact}</h5>
                                    <h5 className="contact" ><b>Email: </b>{daycare.email}</h5>
                                    <h5 className="contact" ><b>Phone: </b>{daycare.phone}</h5>
                                    <h5 className="contact" ><b>Address: </b>{daycare.address}</h5>
                                </div>
                            </div>
                            :
                            <div />
                    }
                </div>
            </div >

        )
    }
}

const mapState = (state, ownProps) => {
    return {
        daycare: state.selectedDaycare,
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        setDaycare: (daycareId) => {
            dispatch(fetchDaycare(daycareId))
        }
    }
}

const connectedDaycare = withRouter(connect(mapState, mapDispatch)(SingleDaycare))
export default connectedDaycare;